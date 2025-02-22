import { PropsWithChildren } from "react";

export type CassetteProps = {
  name: string;
  title?: string;
  author?: string;
  comment?: string;
};
function CathodeRay_Cassette(props: PropsWithChildren<CassetteProps>) {
  return props.children;
}
CathodeRay_Cassette.JsonOutputKey = "CathodeRay_Cassette";
export { CathodeRay_Cassette as Cassette };

function CathodeRay_Wrapper(props: PropsWithChildren) {
  return props.children;
}
CathodeRay_Wrapper.JsonOutputKey = "CathodeRay_Wrapper";
export { CathodeRay_Wrapper as Wrapper };

export type ScreenProps = {
  id: string;
};
function CathodeRay_Screen(props: PropsWithChildren<ScreenProps>) {
  return props.children;
}
CathodeRay_Screen.JsonOutputKey = "CathodeRay_Screen";
export { CathodeRay_Screen as Screen };

export type LineProps = {
  style?: "alert";
};
function CathodeRay_Line(props: PropsWithChildren<LineProps>) {
  return props.children;
}
CathodeRay_Line.JsonOutputKey = "CathodeRay_Line";
CathodeRay_Line.JsonOutputLeaf = true;
export { CathodeRay_Line as Line };

function CathodeRay_Br() {
  return " ";
}
CathodeRay_Br.JsonOutputKey = "CathodeRay_Br";
CathodeRay_Br.JsonOutputLeaf = true;
export { CathodeRay_Br as Br };

export type LinkTarget = {
  target: string;
  type: "dialog" | "link";
  shiftKey?: boolean;
};
export type LinkProps = {
  target: string | LinkTarget[];
  style?: "alert";
};
function CathodeRay_Link(props: PropsWithChildren<LinkProps>) {
  return props.children;
}
CathodeRay_Link.JsonOutputKey = "CathodeRay_Link";
CathodeRay_Link.JsonOutputLeaf = true;
export { CathodeRay_Link as Link };

export type BitmapProps = {
  src: string;
  style?:
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
};
/* eslint-disable  @typescript-eslint/no-unused-vars */
function CathodeRay_Bitmap(_props: BitmapProps) {
  return "";
}
CathodeRay_Bitmap.JsonOutputKey = "CathodeRay_Bitmap";
export { CathodeRay_Bitmap as Bitmap };

function CathodeRay_Toggle(props: PropsWithChildren) {
  return props.children;
}
CathodeRay_Toggle.JsonOutputKey = "CathodeRay_Toggle";
export { CathodeRay_Toggle as Toggle };

function CathodeRay_ToggleOption(props: PropsWithChildren) {
  return props.children;
}
CathodeRay_ToggleOption.JsonOutputKey = "CathodeRay_ToggleOption";
CathodeRay_ToggleOption.JsonOutputLeaf = true;
export { CathodeRay_ToggleOption as ToggleOption };

export type PromptCommandAction = {
  type: "link" | "dialog";
  target: string;
};
export type PromptCommand = {
  command: string;
  action: PromptCommandAction;
};
export type PromptProps = {
  style?: "alert";
  commands: PromptCommand[];
};
function CathodeRay_Prompt(props: PropsWithChildren<PromptProps>) {
  return props.children;
}
CathodeRay_Prompt.JsonOutputKey = "CathodeRay_Prompt";
CathodeRay_Prompt.JsonOutputLeaf = true;
export { CathodeRay_Prompt as Prompt };

export type DialogProps = {
  id: string;
  style: "alert";
};
function CathodeRay_Dialog(props: PropsWithChildren<DialogProps>) {
  return props.children;
}
CathodeRay_Dialog.JsonOutputKey = "CathodeRay_Dialog";
export { CathodeRay_Dialog as Dialog };
