import Phosphor from "@/components/Phosphor";
import * as cassetteLibrary from "@/cassettes";
import loadCassettes from "@/utils/load-cassettes";

const cassettes = loadCassettes(cassetteLibrary);
const cassette = cassettes[0].value;

export default function Home() {
  return <Phosphor cassette={cassette} />;
}
