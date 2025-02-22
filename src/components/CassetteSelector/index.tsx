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

export default function CassetteSelector({ cassettes }: TProps) {
  const cassette = createMetaCassette(cassettes);
  return <Phosphor cassette={cassette} cassetteKey="/" />;
}
