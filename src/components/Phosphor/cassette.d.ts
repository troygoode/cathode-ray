export interface IScriptScreenContentBitmap {
  type: "bitmap";
  src: string;
  alt?: string;
  className?:
    | "transparent-bg"
    | "monochrome"
    | "luminosity"
    | "lighten"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color";
}

export interface IScriptScreenContentPromptCommandAction {
  type: "link" | "dialog" | "console" | "href";
  target: string;
}

export interface IScriptScreenContentPromptCommand {
  command: string;
  action: IScriptScreenContentPromptCommandAction;
}

export interface IScriptScreenContentPrompt {
  type: "prompt";
  prompt: string;
  className?: string;
  commands: IScriptScreenContentPromptCommand[];
}

export interface IScriptScreenContentToggleOption {
  active: boolean;
  text: string;
}
export interface IScriptScreenContentToggle {
  type: "toggle";
  states: IScriptScreenContentToggleOption[];
}

export interface IScriptScreenContentLinkTarget {
  type: "dialog" | "link" | "href";
  target: string;
  shiftKey?: boolean;
}

export interface IScriptScreenContentLink {
  type: "link";
  text: string;
  className?: string;
  target:
    | string
    | IScriptScreenContentLinkTarget[]
    | IScriptScreenContentLinkTarget;
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
  content: TScriptScreenContent[];
}

export interface ICassette {
  screens: IScriptScreen[];
  dialogs?: IScriptDialog[];
  meta: {
    name: string;
    title?: string;
    author?: string;
    comment?: string;
    website?: string;
  };
}
