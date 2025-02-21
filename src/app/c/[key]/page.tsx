import { decode } from "@/utils/hex";
import * as cassetteLibrary from "@/cassettes2";
import loadCassettes from "@/utils/load-cassettes";
import { notFound } from "next/navigation";
import Phosphor from "@/components/Phosphor";

type TProps = {
  params: Promise<{ key: string }>;
};

const cassettes = loadCassettes(cassetteLibrary);

export default async function Page(props: TProps) {
  const key = (await props.params).key;
  const decoded = decode(key);

  const cassette = cassettes.find((c) => c.meta.name === decoded);
  if (!cassette) {
    return notFound();
  }

  return <Phosphor cassette={cassette} />;
}
