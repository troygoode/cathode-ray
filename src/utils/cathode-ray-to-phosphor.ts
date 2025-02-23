import { TNode, TChild, INodeBranch, TAttributes } from "@/utils/jsx-to-js";
import {
  ICassette,
  IScriptScreen,
  IScriptDialog,
  TScriptScreenContent,
  IScriptScreenContentToggleOption,
} from "@/components/Phosphor/cassette";
import { PromptCommand } from "@/components/CathodeRay/Core";

interface IContent {
  name: string;
  attributes?: TAttributes;
  children?: TChild[];
  value?: string;
}
type TNameCb = (node: TNode | TChild) => boolean;

const isNamed = (name: string): TNameCb => {
  return (node: TNode | TChild): boolean => {
    const n = node as TNode;
    return n.name === name;
  };
};

/* eslint-disable  @typescript-eslint/no-unused-vars */
const parseBr = (_content: IContent): TScriptScreenContent => {
  return "";
};

const parseLine = (content: IContent): TScriptScreenContent => {
  const att = content.attributes || {};
  if (att["style"]) {
    return {
      type: "text",
      className: att["style"],
      text: content.value || "",
    };
  } else {
    return content.value || "";
  }
};

const parseLink = (content: IContent): TScriptScreenContent => {
  const att = content.attributes || {};
  return {
    type: "link",
    target: att["target"],
    className: att["style"],
    text: content.value || "",
  };
};

const parsePromptCommand = (command: TAttributes): PromptCommand => {
  return {
    command: command["command"],
    action: {
      type: command["action"]["type"],
      target: command["action"]["target"],
    },
  };
};

const parsePrompt = (content: IContent): TScriptScreenContent => {
  const att = content.attributes || {};
  return {
    type: "prompt",
    className: [att["style"] || "", "cursor"].join(" "),
    prompt: (content.value || "") + " ",
    commands: att["commands"]?.map(parsePromptCommand) || [],
  };
};

const parseBitmap = (content: IContent): TScriptScreenContent => {
  const att = content.attributes || {};
  return {
    type: "bitmap",
    src: att["src"],
    className: att["style"],
  };
};

const parseToggleOption = (child: TChild): IScriptScreenContentToggleOption => {
  const content: IContent = child as IContent;
  return {
    active: false,
    text: content.value || "",
  };
};

const parseToggle = (content: IContent): TScriptScreenContent => {
  const branch: INodeBranch = content as INodeBranch;
  const options =
    branch.children
      ?.filter(isNamed("CathodeRay_ToggleOption"))
      .map(parseToggleOption) || [];
  if (options.length) {
    options[0].active = true;
  }
  return {
    type: "toggle",
    states: options,
  };
};

const parseWrapper = (content: IContent): TScriptScreenContent[] => {
  const branch: INodeBranch = content as INodeBranch;
  const children: TScriptScreenContent[] | undefined = branch.children
    ?.map(parseContent)
    .flat();
  return children || [];
};

const parseContent = (
  node: TNode | TChild
): TScriptScreenContent | TScriptScreenContent[] => {
  const content: IContent = node as IContent;
  switch (content.name) {
    case "CathodeRay_Bitmap":
      return parseBitmap(content);
    case "CathodeRay_Br":
      return parseBr(content);
    case "CathodeRay_Line":
      return parseLine(content);
    case "CathodeRay_Link":
      return parseLink(content);
    case "CathodeRay_Prompt":
      return parsePrompt(content);
    case "CathodeRay_Toggle":
      return parseToggle(content);
    case "CathodeRay_Wrapper":
      return parseWrapper(content);
    default:
      return "PARSER_ERROR: NO MATCH";
  }
};

const parseScreen = (node: TNode | TChild): IScriptScreen => {
  const branch: INodeBranch = node as INodeBranch;
  const att = branch.attributes || {};
  return {
    id: att["id"],
    type: "screen",
    content: (branch.children?.map(parseContent) || []).flat(),
  };
};

const parseDialog = (node: TNode | TChild): IScriptDialog => {
  const branch: INodeBranch = node as INodeBranch;
  const att = branch.attributes || {};
  return {
    id: att["id"],
    type: att["style"],
    content: (branch.children?.map(parseContent) || []).flat(),
  };
};

const parseCassette = (node: TNode): ICassette => {
  const branch: INodeBranch = node as INodeBranch;
  const att = branch.attributes || {};
  return {
    meta: {
      name: att["name"],
      title: att["title"],
      author: att["author"],
      comment: att["comment"],
      website: att["website"],
    },
    screens:
      branch.children?.filter(isNamed("CathodeRay_Screen")).map(parseScreen) ||
      [],
    dialogs:
      branch.children?.filter(isNamed("CathodeRay_Dialog")).map(parseDialog) ||
      [],
  };
};

export default function toPhosphor(node: TNode): ICassette | null {
  if (node.name !== "CathodeRay_Cassette") {
    return null;
  }
  return parseCassette(node);
}
