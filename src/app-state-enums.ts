export enum DialogType {
  Unknown = 0,
  Alert, // simple message box
  Confirm, // yes/no box; currently unsupported
  Dialog, // has arbitrary content; currently unsupported
}

export enum ScreenType {
  Unknown = 0,
  Screen,
  Static,
}

export enum ScreenDataType {
  Unknown = 0,
  Text,
  Link,
  Bitmap,
  Prompt,
  Toggle,
}

export enum ScreenDataState {
  Unloaded = 0,
  Ready,
  Active,
  Done,
}

export enum AppStatus {
  Unset = 0,
  Ready,
  Active,
  Done,
}
