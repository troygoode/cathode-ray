import CassetteSelector from "@/components/CassetteSelector";
import * as cassetteLibrary from "@/cassettes2";
import loadCassettes from "@/utils/load-cassettes";

const cassettes = loadCassettes(cassetteLibrary);

export default function Home() {
  return <CassetteSelector cassettes={cassettes} />;
}
