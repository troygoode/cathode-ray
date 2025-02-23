import type { ICassette } from "@/components/Phosphor/cassette";

export interface ICassetteEntry {
  key: string;
  value: ICassette;
}

import toJSON from "@/utils/jsx-to-js";
import collapse from "@/utils/cathode-ray-collapse";
import toPhosphor from "@/utils/cathode-ray-to-phosphor";

export default function loadCassettes(cassetteLibrary: object): ICassette[] {
  const cassettes: ICassette[] = [];
  for (const [, value] of Object.entries(cassetteLibrary)) {
    const json = toJSON(value());
    const collapsedJson = collapse(json);
    const cassette = toPhosphor(collapsedJson);
    if (cassette) {
      cassettes.push(cassette);
    }
  }
  return cassettes;
}
