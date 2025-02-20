export interface IScriptScreenContentBitmap {
  type: "bitmap";
  src: string;
  alt?: string;
  className?: string;
}

export interface IScriptScreenContentPromptCommandAction {
  type: "link" | "dialog" | "console";
  target: string;
}

export interface IScriptScreenContentPromptCommand {
  command: "back" | "dialog" | "image" | "ok";
  action: IScriptScreenContentPromptCommandAction;
}

export interface IScriptScreenContentPrompt {
  type: "prompt";
  prompt: string;
  className?: string;
  commands: IScriptScreenContentPromptCommand[];
}

export interface IScriptScreenContentToggle {
  type: "toggle";
  states: {
    active: boolean;
    text: string;
  }[];
}

export interface IScriptScreenContentLinkTarget {
  target: string;
  type: "dialog" | "link";
  shiftKey: boolean;
}

export interface IScriptScreenContentLink {
  type: "link";
  text: string;
  className?: string;
  target: string | IScriptScreenContentLinkTarget[];
}

export interface IScriptScreenContentText {
  type: "text";
  text: string;
  className?: string;
}

export type TScriptScreenContent =
  | string
  | IScriptScreenContentText
  | IScriptScreenContentLink
  | IScriptScreenContentToggle
  | IScriptScreenContentPrompt
  | IScriptScreenContentBitmap;

export interface IScriptScreen {
  id: string;
  type: "screen";
  content: TScriptScreenContent[];
}

export interface IScriptDialog {
  id: string;
  type: "alert";
  content: string[];
}

export interface IScript {
  screens: IScriptScreen[];
  dialogs: IScriptDialog[];
  config?: {
    name: string;
    author: string;
    comment?: string;
  };
}
