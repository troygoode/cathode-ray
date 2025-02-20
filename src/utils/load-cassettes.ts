import type { ICassette } from "@/cassette";

export interface ICassetteEntry {
  key: string;
  value: ICassette;
}

export default function loadCassettes(foo: object): ICassetteEntry[] {
  return Object.entries(foo).map(([key, value]): ICassetteEntry => {
    return {
      key,
      value: value as ICassette,
    };
  });
}
