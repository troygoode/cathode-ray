export interface ScreenData {
  id: string;
  type: ScreenDataType;
  state: ScreenDataState;

  //TODO validate we really need this to be arbitrary
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  [key: string]: any; // arbitrary members
}

export interface Dialog {
  id: string;
  type: DialogType;

  //TODO validate we really need this to be arbitrary
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  [key: string]: any; // arbitrary members
}

export interface Screen {
  id: string;
  type: ScreenType;
  content: ScreenData[];
}

export interface AppState {
  screens: Screen[];
  dialogs: Dialog[];
  activeScreenId: string | null;
  activeElementId: string | null; // which element, if any, is active
  activeDialogId: string | null; // which element, if any, is active
  loadingQueue: string[];
  status: AppStatus;
}
