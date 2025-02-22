import {
  ICassette,
  IScriptScreenContentBitmap,
  TScriptScreenContent,
} from "@/cassette";
import Phosphor from "@/components/Phosphor";
import { encode } from "@/utils/hex";

import logo from "@/assets/cathode-ray-logo.png";

type TProps = {
  cassettes: ICassette[];
};

const text = (s: string): TScriptScreenContent => {
  return {
    type: "text",
    text: s,
  };
};
const link = (text: string, target?: string): TScriptScreenContent => {
  return {
    type: "link",
    target: {
      type: "href",
      target: target || text,
    },
    text,
  };
};

function generateCassetteSelectionList(
  cassettes: ICassette[]
): TScriptScreenContent[] {
  const result: TScriptScreenContent[] = [];
  const sortedCassettes = cassettes.sort((a, b) => {
    return a.meta.name.localeCompare(b.meta.name);
  });
  for (const cassette of sortedCassettes) {
    result.push("\n");
    result.push(
      link(`> ${cassette.meta.name}`, `/c/${encode(cassette.meta.name)}`)
    );
    if (cassette.meta.author?.length) {
      result.push(text(`* By: ${cassette.meta.author}`));
    }
    if (cassette.meta.website?.length) {
      result.push(
        link(`* Website: ${cassette.meta.website}`, cassette.meta.website)
      );
    }
    if (cassette.meta.comment?.length) {
      result.push(text(`* Comment: ${cassette.meta.comment}`));
    }
  }
  return result;
}

const logoBitmap: IScriptScreenContentBitmap = {
  type: "bitmap",
  className: "color-dodge",
  src: logo.src,
};

function createMetaCassette(cassettes: ICassette[]): ICassette {
  const content: TScriptScreenContent[] = [
    logoBitmap,
    link(
      "Fork me on Github! https://github.com/troygoode/cathode-ray",
      "https://github.com/troygoode/cathode-ray"
    ),
    "\n",
    text("=========================="),
    text("Select a CASSETTE to load:"),
    text("=========================="),
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
