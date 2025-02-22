import { Metadata } from "next";
import { notFound } from "next/navigation";
import { decode } from "@/utils/hex";
import loadCassettes from "@/utils/load-cassettes";
import Phosphor from "@/components/Phosphor";
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
  const decoded = decode(key);

  const cassette = cassettes.find((c) => c.meta.name === decoded);
  if (!cassette) {
    return notFound();
  }

  return (
    <>
      <Phosphor
        cassette={cassette}
        cassetteKey={key}
        activeScreen={screen}
        activeDialog={dialog}
      />
    </>
  );
}
