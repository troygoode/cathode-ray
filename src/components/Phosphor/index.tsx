"use client";

import styles from "./phosphor.module.css";

import React, { Component, ReactElement } from "react";
import type {
  ICassette,
  IScriptDialog,
  IScriptScreen,
  IScriptScreenContentBitmap,
  IScriptScreenContentLink,
  IScriptScreenContentLinkTarget,
  IScriptScreenContentPrompt,
  IScriptScreenContentPromptCommandAction,
  IScriptScreenContentText,
  IScriptScreenContentToggle,
  TScriptScreenContent,
} from "@/cassette";
import cssClass from "@/utils/css-class";
import createIdGenerator from "@/utils/id-generator";

import {
  AppStatus,
  ScreenDataType,
  ScreenDataState,
  ScreenType,
  DialogType,
} from "@/app-state-enums";
import type { AppState, Screen, ScreenData, Dialog } from "@/app-state";

// components
import Teletype from "../Teletype";
import Link from "../Link";
import Text from "../Text";
import Bitmap from "../Bitmap";
import Prompt, { PROMPT_DEFAULT } from "../Prompt";
import Toggle from "../Toggle";
import Modal from "../Modal";
import Scanlines from "../Scanlines";

interface PhosphorProps {
  cassette: ICassette;
}

interface ILoadableElement {
  id: string;
  onLoad: () => void;
}

const generateId = createIdGenerator();

function omitFalsy<T>(array: (T | undefined)[]): T[] {
  return array.filter((element) => element !== undefined) as T[];
}

class Phosphor extends Component<PhosphorProps, AppState> {
  private _containerRef: React.RefObject<HTMLElement | null>;
  private _cassette: ICassette;

  constructor(props: PhosphorProps) {
    super(props);

    this._containerRef = React.createRef<HTMLElement>();
    this._cassette = props.cassette;

    this.state = {
      screens: [],
      dialogs: [],
      activeScreenId: null,
      activeElementId: null,
      activeDialogId: null,
      loadingQueue: [],
      status: AppStatus.Unset,
      renderScanlines: true, // TODO: support option to disable this effect
    };

    this._changeScreen = this._changeScreen.bind(this);
    this._setElementState = this._setElementState.bind(this);
    this._handlePromptCommand = this._handlePromptCommand.bind(this);
    this._handleTeletypeNewLine = this._handleTeletypeNewLine.bind(this);
    this._handleLinkClick = this._handleLinkClick.bind(this);
  }

  public render(): ReactElement {
    const { activeScreenId, activeDialogId, renderScanlines } = this.state;

    return (
      <div className={cssClass(styles, "phosphor")}>
        <section className={"__main__"} ref={this._containerRef}>
          {activeScreenId && this._renderScreen()}
        </section>

        {activeDialogId && this._renderDialog()}

        {/* scanlines should be the last child */}
        {renderScanlines && <Scanlines />}
      </div>
    );
  }

  // public react events
  public componentDidMount(): void {
    // parse the data & prep the screens
    this._parseScreens();
    this._parseDialogs();
  }

  // private methods
  private _parseScreens(): void {
    const screens = this._cassette.screens.map((element) => {
      return this._buildScreen(element);
    });

    if (!screens?.length) {
      return;
    }

    // todo: support config option to set starting screen
    const activeScreen = 0;
    this.setState(
      {
        screens: omitFalsy(screens),
      },
      () => this._setActiveScreen(activeScreen)
    );
  }

  private _parseDialogs(): void {
    if (!this._cassette.dialogs?.length) {
      return;
    }

    const dialogs = this._cassette.dialogs.map((element) => {
      return this._buildDialog(element);
    });

    this.setState({
      dialogs,
    });
  }

  private _buildDialog(src: IScriptDialog): Dialog {
    const id = src.id;
    const type = this._getDialogType(src.type);

    return {
      id,
      type,
      content: src.content,
    };
  }

  private _getDialogType(type: string): DialogType {
    switch (type.toLowerCase()) {
      case "alert":
        return DialogType.Alert;

      case "confirm":
        return DialogType.Confirm;

      case "dialog":
        return DialogType.Dialog;

      default:
        return DialogType.Unknown;
    }
  }

  private _setActiveScreen(index: number): void {
    const { screens } = this.state;
    const activeScreen = screens[index].id;
    this.setState(
      {
        activeScreenId: activeScreen,
      },
      () => this._activateScreen()
    );
  }

  // we're off to the races!
  private _activateScreen(): void {
    const screen = this._getScreen(this.state.activeScreenId);

    // update the app status
    const status = AppStatus.Active;

    // depending on the screen type, we perform different actions here
    switch (screen?.type) {
      case ScreenType.Static:
        this.setState({
          status,
        });
        break;

      case ScreenType.Screen:
        screen.content[0].state = ScreenDataState.Active;

        this.setState({
          status,
          activeElementId: screen.content[0].id,
        });
        break;

      default: // do nothing
        break;
    }
  }

  private _buildScreen(src: IScriptScreen): Screen {
    // try to parse & build the screen
    const id = src.id;
    const type = this._getScreenType(src.type);
    const content = this._parseScreenContent(src.content).flat(); // flatten to one dimension

    return {
      id,
      type,
      content,
    };
  }

  private _getScreenType(type: string): ScreenType {
    switch (type.toLowerCase()) {
      case "screen":
        return ScreenType.Screen;

      case "static":
        return ScreenType.Static;

      default:
        return ScreenType.Unknown;
    }
  }

  private _renderScreen(): ReactElement[] | undefined {
    // get the active screen
    const screen = this._getScreen(this.state.activeScreenId);
    if (!screen) {
      return;
    }

    // loop through the screen contents & render each element
    const result = screen.content.map((element, index) => {
      // wrap a div around the element based on its state

      // if it's ready, do nothing
      if (element.state === ScreenDataState.Ready) {
        return;
      }

      // if it's active, render it animated
      if (element.state === ScreenDataState.Active) {
        return (
          <div className="active" key={index}>
            {this._renderActiveElement(element, index)}
          </div>
        );
      }

      // if it's done, render it static
      if (element.state === ScreenDataState.Done) {
        return (
          <div className="rendered" key={index}>
            {this._renderStaticElement(element, index)}
          </div>
        );
      }

      // unknown
      return;
    });

    return omitFalsy(result);
  }

  private _getScreen(id: string | null): Screen | undefined {
    return this.state.screens.find((element) => element.id === id);
  }

  private _parseScreenContent(content: TScriptScreenContent[]): ScreenData[] {
    if (!content) {
      return [];
    }

    const parsed = content
      .map((element) => this._parseScreenContentElement(element))
      .flat();
    const result = parsed.map((element) => this._generateScreenData(element));
    return omitFalsy(result);
  }

  private _generateScreenData(
    element: TScriptScreenContent
  ): ScreenData | undefined {
    // TODO: build the data object based on the element type
    // e.g. typeof element === "string" --> create a new ScreenData Text object
    const id = generateId();
    let state = ScreenDataState.Ready;
    let onLoad: (() => void) | undefined = undefined;

    // if an element has "load" property, its requires more work
    // to prepare so it's can't yet be considered "ready".
    if (element.hasOwnProperty("onLoad")) {
      const loadable = element as unknown as ILoadableElement;
      const loadingQueue = [...this.state.loadingQueue];
      loadingQueue.push(loadable.id);
      this.setState({
        loadingQueue,
      });
      state = ScreenDataState.Unloaded;
      onLoad = loadable.onLoad;
    }

    // text-only elements can be added as strings in the JSON data; they don't need any object wrappers
    if (typeof element === "string") {
      return {
        id,
        type: ScreenDataType.Text,
        text: element,
        state,
        onLoad,
      };
    }

    // everything else requires a wrapper containing a "type" attribute, so we'll need to parse those here
    if (!element.type) {
      return;
    }

    switch (element.type.toLowerCase()) {
      case "text":
        const text = element as unknown as IScriptScreenContentText;
        return {
          id,
          type: ScreenDataType.Text,
          text: text.text,
          className: text.className,
          state,
          onLoad,
        };

      case "link":
        const link = element as unknown as IScriptScreenContentLink;
        return {
          id,
          type: ScreenDataType.Link,
          target: link.target,
          className: link.className,
          text: link.text,
          state,
          onLoad,
        };

      case "image":
      case "bitmap":
        const bitmap = element as unknown as IScriptScreenContentBitmap;
        return {
          id,
          type: ScreenDataType.Bitmap,
          src: bitmap.src,
          alt: bitmap.alt,
          className: bitmap.className,
          state,
          onLoad,
        };

      case "prompt":
        const prompt = element as unknown as IScriptScreenContentPrompt;
        return {
          id,
          type: ScreenDataType.Prompt,
          prompt: prompt.prompt || PROMPT_DEFAULT,
          className: prompt.className,
          commands: prompt.commands,
          state,
          onLoad,
        };

      case "toggle":
        const toggle = element as unknown as IScriptScreenContentToggle;
        return {
          id,
          type: ScreenDataType.Toggle,
          states: toggle.states,
          state,
        };

      default:
        return;
    }
  }

  private _parseScreenContentElement(
    element: TScriptScreenContent
  ): TScriptScreenContent | string[] {
    // if the element is a string, we'll want to
    // split it into chunks based on the new line character
    if (typeof element === "string") {
      return element.split("\n");
    }

    // otherwise, just return the element
    return element;
  }

  // based on the current active ScreenData, render the corresponding active element
  private _renderActiveElement(
    element: ScreenData,
    key: number
  ): ReactElement | undefined {
    const type = element.type;

    // if the element is text-based, like text or Link, render instead a
    // teletype component
    if (
      type === ScreenDataType.Text ||
      type === ScreenDataType.Link ||
      type === ScreenDataType.Prompt
    ) {
      const text =
        type === ScreenDataType.Prompt ? element.prompt : element.text;
      const handleRendered = () => this._activateNextScreenData();
      return (
        <Teletype
          key={key}
          text={text}
          onComplete={handleRendered}
          onNewLine={this._handleTeletypeNewLine}
          autocomplete={false}
          className={element.className}
        />
      );
    }

    // the toggle gets its text from the states array
    if (type === ScreenDataType.Toggle) {
      const toggle = element as unknown as IScriptScreenContentToggle;
      const text =
        toggle.states.find((item) => item.active === true)?.text ||
        toggle.states[0].text;
      const handleRendered = () => this._activateNextScreenData();
      return (
        <Teletype
          key={key}
          text={text}
          onComplete={handleRendered}
          onNewLine={this._handleTeletypeNewLine}
          autocomplete={false}
          className={element.className}
        />
      );
    }

    if (type === ScreenDataType.Bitmap) {
      const handleRendered = () => this._activateNextScreenData();
      return (
        <Bitmap
          key={key}
          className={element.className}
          src={element.src}
          alt={element.alt}
          onComplete={handleRendered}
        />
      );
    }

    // otherwise, just activate the next element
    this._activateNextScreenData();
    return;
  }

  // renders the final, interactive element to the screen
  private _renderStaticElement(
    element: ScreenData,
    key: number
  ): ReactElement | undefined {
    const className = element.className || "";
    const handleRendered = () => {
      this._setElementState(element.id, ScreenDataState.Done);
    };

    if (element.type === ScreenDataType.Text) {
      // \0 is the ASCII null character to ensure empty lines aren't collapsed
      // https://en.wikipedia.org/wiki/Null_character
      const text = element.text.length ? element.text : "\0";
      return (
        <Text
          key={key}
          className={className}
          text={text}
          onRendered={handleRendered}
        />
      );
    }

    // link
    if (element.type === ScreenDataType.Link) {
      return (
        <Link
          key={key}
          text={element.text}
          target={element.target}
          className={className}
          onClick={this._handleLinkClick}
          onRendered={handleRendered}
        />
      );
    }

    // bitmap
    if (element.type === ScreenDataType.Bitmap) {
      const onComplete = () => {
        // this._activateNextScreenData();
        this._setElementState(element.id, ScreenDataState.Done);
      };
      return (
        <Bitmap
          key={key}
          className={className}
          src={element.src}
          alt={element.alt}
          onComplete={onComplete}
          autocomplete={true}
        />
      );
    }

    // prompt
    if (element.type === ScreenDataType.Prompt) {
      return (
        <Prompt
          key={key}
          className={className}
          disabled={!!this.state.activeDialogId}
          prompt={element.prompt}
          commands={element.commands}
          onCommand={this._handlePromptCommand}
        />
      );
    }

    // prompt
    if (element.type === ScreenDataType.Toggle) {
      return <Toggle key={key} className={className} states={element.states} />;
    }

    return;
  }

  private _changeScreen(targetScreen: string): void {
    // todo: handle missing screen
    // unload the current screen first
    this._unloadScreen();

    // active the first element in the screen's content collection
    const screen = this._getScreen(targetScreen);
    if (!screen) {
      return;
    }

    const activeElement = screen.content[0];
    activeElement.state = ScreenDataState.Active;

    this.setState({
      activeScreenId: targetScreen,
      activeElementId: activeElement.id,
      status: AppStatus.Active,
    });
  }

  private _setElementState(id: string, state: ScreenDataState): void {
    const screen = this._getScreen(this.state.activeScreenId);
    if (!screen) {
      return;
    }

    const content = screen.content.find((element) => element.id === id);

    // only change the state if we need to
    if (content && content.state !== state) {
      content.state = state;
    }
  }

  private _unloadScreen(): void {
    // go through the current screen elements, setting
    // their states to ScreenDataState.Ready
    const screen = this._getScreen(this.state.activeScreenId);
    if (!screen) {
      return;
    }

    screen.content.forEach((element) => {
      element.state = ScreenDataState.Unloaded;
    });
  }

  private _getScreenDataById(id: string): ScreenData | undefined {
    const screen = this._getScreen(this.state.activeScreenId);
    if (!screen) {
      return;
    }

    return screen.content.find((element) => element.id === id);
  }

  // find the currently active element and, if possible, activate it
  private _activateNextScreenData(): void {
    const screen = this._getScreen(this.state.activeScreenId);
    if (!screen) {
      return;
    }

    const activeIndex = screen.content.findIndex(
      (element) => element.state === ScreenDataState.Active
    );

    // nothing is active
    if (activeIndex === -1) {
      return;
    }

    // we're done with this element now
    screen.content[activeIndex].state = ScreenDataState.Done;

    // we're at the end of the array so there is no next
    if (activeIndex === screen.content.length - 1) {
      // todo: indicate everything's done
      this.setState({
        activeElementId: null,
        status: AppStatus.Done,
      });

      return;
    }

    // otherwise, activate the next one
    screen.content[activeIndex + 1].state = ScreenDataState.Active;

    // todo: indicate everything's done
    this.setState({
      activeElementId: screen.content[activeIndex + 1].id,
    });
  }

  private _getActiveScreenData(): ScreenData | undefined {
    const screen = this._getScreen(this.state.activeScreenId);
    if (!screen) {
      return;
    }

    const activeIndex = screen.content.findIndex(
      (element) => element.state === ScreenDataState.Active
    );

    // is something active?
    if (activeIndex > -1) {
      return screen.content[activeIndex];
    }

    // otherwise set & return the first element
    const firstData = screen.content[0];

    // unless that element is already done or not yet loaded
    if (
      firstData.state === ScreenDataState.Done ||
      firstData.state === ScreenDataState.Unloaded
    ) {
      return;
    }

    firstData.state = ScreenDataState.Active;
    return firstData;
  }

  private _setActiveScreenDataByIndex(index: number): void {
    const screen = this._getScreen(this.state.activeScreenId);
    if (!screen) {
      return;
    }
    screen.content[index].state = ScreenDataState.Active;
  }

  private _toggleDialog(dialogId?: string): void {
    // TODO: check if targetDialog is a valid dialog
    this.setState({
      activeDialogId: dialogId || null,
    });
  }

  private _handlePromptCommand(
    command: string,
    action: IScriptScreenContentPromptCommandAction
  ) {
    switch (action.type) {
      case "link":
        // fire the change screen event
        if (action.target) {
          this._changeScreen(action.target);
        }
        break;

      case "dialog":
        if (action.target) {
          this._toggleDialog(action.target);
        }
        break;

      case "console":
        console.log(command, action);
        break;

      default:
        // throw an error message
        break;
    }
  }

  private _renderDialog(): ReactElement | undefined {
    const { activeDialogId, dialogs } = this.state;

    if (!activeDialogId) {
      return;
    }

    const dialog = dialogs.find((element) => element.id === activeDialogId);
    if (!dialog) {
      return;
    }

    const handleClose = () => this._toggleDialog();

    return <Modal text={dialog.content} onClose={handleClose} />;
  }

  private _handleTeletypeNewLine(): void {
    // TODO: handle lineheight/scrolling
    // const ref = this._containerRef;
    void 0;
    // console.log("scrolling!", ref);
    // const lineheight = this.props.measurements.lineHeight;
    // if (ref) {
    //     ref.current.scrollTop += lineheight;
    // }
  }

  private _handleLinkClick(
    target: string | IScriptScreenContentLinkTarget[],
    shiftKey: boolean
  ): void {
    // if it's a string, it's a screen
    if (typeof target === "string") {
      this._changeScreen(target);
      return;
    }

    // otherwise, it's a LinkTarget array
    const targets = Array.isArray(target) ? target : [target];
    const linkTarget = targets.find((element) => !element.shiftKey || shiftKey);

    if (linkTarget) {
      // perform the appropriate action based on type
      // TODO: type-check the object
      if (linkTarget.type === "dialog") {
        this._toggleDialog(linkTarget.target);
        return;
      }

      if (linkTarget.type === "link") {
        this._changeScreen(linkTarget.target);
        return;
      }
    }
  }
}

export default Phosphor;
