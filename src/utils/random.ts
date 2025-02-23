import Rand from "rand-seed";
import { first, last } from "./random-names";

export default function createGenerator(seed: string) {
  const rand = new Rand(seed.toString());
  return {
    fromArray<T>(arr: T[]): T {
      const r = Math.floor(rand.next() * arr.length);
      return arr[r];
    },
    name: (): { first: string; last: string } => {
      const rfirst = Math.floor(rand.next() * first.length);
      const rlast = Math.floor(rand.next() * last.length);
      return { first: first[rfirst].toString(), last: last[rlast].toString() };
    },
  };
}
