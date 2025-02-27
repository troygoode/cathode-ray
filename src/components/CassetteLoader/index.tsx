import { Metadata } from "next";
import { notFound } from "next/navigation";
import { encode, decode } from "@/utils/hex";
import loadCassettes from "@/utils/load-cassettes";
import Phosphor from "@/components/Phosphor/PhosphorInstance";
import * as cassetteLibrary from "@/cassettes";

export type TCassetteLoaderProps = {
  params: Promise<{ key: string; screen?: string; dialog?: string }>;
};

const cassettes = loadCassettes(cassetteLibrary);

export async function generateMetadata(
  props: TCassetteLoaderProps
): Promise<Metadata> {
  const key = (await props.params).key;
  const decoded = decode(key);

  const cassette = cassettes.find((c) => c.meta.name === decoded);
  if (!cassette) {
    return {
      title: "404 Not Found",
    };
  } else {
    return {
      title: cassette.meta.title || cassette.meta.name,
    };
  }
}

export default async function Page(props: TCassetteLoaderProps) {
  const { key, screen, dialog } = await props.params;
  const decoded = {
    key: decode(key),
    screen: screen && decode(screen),
    dialog: dialog && decode(dialog),
  };

  const cassette = cassettes.find((c) => c.meta.name === decoded.key);
  if (!cassette) {
    return notFound();
  }

  return (
    <>
      <Phosphor
        cassette={cassette}
        cassetteKey={key}
        activeScreen={decoded.screen}
        activeDialog={decoded.dialog}
      />
    </>
  );
}

type TStaticCassette = {
  key: string;
  screens: string[];
  dialogs: string[];
};

type TCassetteRoute =
  | {
      key: string;
    }
  | {
      key: string;
      screen: string;
    }
  | {
      key: string;
      screen: string;
      dialog: string;
    };

export function generateStaticParamsInternal(output: "c" | "c+s" | "c+s+d") {
  const staticCassettes: TStaticCassette[] = cassettes.map((c) => {
    return {
      key: c.meta.name,
      screens: c.screens.map((s) => s.id),
      dialogs: c.dialogs?.map((d) => d.id) || [],
    };
  });

  const results: TCassetteRoute[] = [];
  for (const c of staticCassettes) {
    if (output === "c") {
      results.push({ key: encode(c.key) });
      continue;
    }
    for (const screen of c.screens) {
      if (output === "c+s") {
        results.push({
          key: encode(c.key),
          screen: encode(screen),
        });
        continue;
      }
      if (output === "c+s+d") {
        for (const dialog of c.dialogs) {
          results.push({
            key: encode(c.key),
            screen: encode(screen),
            dialog: encode(dialog),
          });
        }
      }
    }
  }
  return results;
}
