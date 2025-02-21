"use client";

import { ICassette, TScriptScreenContent } from "@/cassette";
import Phosphor from "@/components/Phosphor";
import { encode } from "@/utils/hex";

type TProps = {
  cassettes: ICassette[];
};

function generateCassetteSelectionList(
  cassettes: ICassette[]
): TScriptScreenContent[] {
  return cassettes.map((cassette) => {
    return {
      type: "link",
      target: {
        type: "href",
        target: `/c/${encode(cassette.meta.name)}`,
      },
      text: `* ${cassette.meta.name}`,
    };
  });
}

function createMetaCassette(cassettes: ICassette[]): ICassette {
  const intro: TScriptScreenContent = {
    type: "text",
    text: "Select a cassette to begin.",
  };
  const content: TScriptScreenContent[] = [
    intro,
    "\n",
    generateCassetteSelectionList(cassettes),
  ].flat();

  return {
    meta: {
      name: "Meta",
      author: "AUTO-GENERATED",
    },
    screens: [
      {
        id: "meta-selection",
        type: "screen",
        content,
      },
    ],
  };
}

import Test from "@/cassettes2/ypsilon14";
import toJSON from "@/utils/jsx-to-js";
import collapse from "@/utils/cathode-ray-collapse";
import toPhosphor from "@/utils/cathode-ray-to-phosphor";

export default function CassetteSelector({ cassettes }: TProps) {
  const json = toJSON(Test());
  const json2 = collapse(json);
  const json3 = toPhosphor(json2);
  console.log(JSON.stringify(json3, null, "  "));
  const cassette = createMetaCassette(cassettes);
  return <Phosphor cassette={json3 || cassette} />;
}
