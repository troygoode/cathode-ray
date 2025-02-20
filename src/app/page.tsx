import Phosphor from "@/components/Phosphor";
import type { IScript } from "@/script-spec";

// for different content, edit sample.json, or,
// preferrably, create a new JSON and load it here
import json from "@/data/ypsilon14";

const _json: IScript = json;

export default function Home() {
  return <Phosphor json={_json} />;
}
