import { PropsWithChildren } from "react";

export type CassetteProps = {
  name: string;
  author?: string;
  comment?: string;
};
function CathodeRay_Cassette(props: PropsWithChildren<CassetteProps>) {
  return props.children;
}
export { CathodeRay_Cassette as Cassette };

export type ScreenProps = {
  id: string;
};
function CathodeRay_Screen(props: PropsWithChildren<ScreenProps>) {
  return props.children;
}
export { CathodeRay_Screen as Screen };

export type LineProps = {
  style?: "alert";
};
function CathodeRay_Line(props: PropsWithChildren<LineProps>) {
  return props.children;
}
export { CathodeRay_Line as Line };

function CathodeRay_Br() {
  return " ";
}
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
export { CathodeRay_Link as Link };

export type BitmapProps = {
  src: string;
  style?: "lighten";
};
function CathodeRay_Bitmap(_props: BitmapProps) {
  return "";
}
export { CathodeRay_Bitmap as Bitmap };

function CathodeRay_Toggle(props: PropsWithChildren<{}>) {
  return props.children;
}
export { CathodeRay_Toggle as Toggle };

function CathodeRay_ToggleOption(props: PropsWithChildren<{}>) {
  return props.children;
}
export { CathodeRay_ToggleOption as ToggleOption };

export type PromptCommandAction = {
  type: "link";
  target: string;
};
export type PromptCommand = {
  command: "ok";
  action: PromptCommandAction;
};
export type PromptProps = {
  style?: "alert";
  commands: PromptCommand[];
};
function CathodeRay_Prompt(props: PropsWithChildren<PromptProps>) {
  return props.children;
}
export { CathodeRay_Prompt as Prompt };

export type DialogProps = {
  id: string;
  style: "alert";
};
function CathodeRay_Dialog(props: PropsWithChildren<DialogProps>) {
  return props.children;
}
export { CathodeRay_Dialog as Dialog };
