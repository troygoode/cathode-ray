import type { ICassette } from "@/cassette";

export interface ICassetteEntry {
  key: string;
  value: ICassette;
}

export default function loadCassettes(foo: object): ICassette[] {
  return Object.entries(foo).map(([, value]): ICassette => {
    return value as ICassette;
  });
}
