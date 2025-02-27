import React, { FC, useEffect, useRef, RefObject, useState } from "react";
import type {
  IScriptScreenContentPromptCommand,
  IScriptScreenContentPromptCommandAction,
} from "@/components/Phosphor/cassette";
import { cn } from "@/utils/utils";

import "./style.css";

export interface PromptProps {
  prompt?: string;
  commands?: IScriptScreenContentPromptCommand[];
  className?: string;
  disabled?: boolean;

  onCommand?: (
    command: string,
    action: IScriptScreenContentPromptCommandAction
  ) => void;
  onEscape?: () => void;
  onRendered?: () => void;
}

export const PROMPT_DEFAULT = "$> ";

const Prompt: FC<PromptProps> = (props) => {
  const { disabled, prompt, className, commands, onCommand, onRendered } =
    props;
  const span = document.createElement("span");
  const ref: RefObject<HTMLSpanElement> = useRef(span);
  const css = [
    "__prompt__",
    disabled ? "disabled" : null,
    className ? className : null,
  ]
    .join(" ")
    .trim();

  const [value, setValue] = useState("");

  // events
  const handleFocus = () => {
    ref.current.focus();
  };

  const handleMobileFocus = () => {
    if (!onCommand) {
      return;
    }

    const input = window.prompt("ENTER TERMINAL INPUT");
    if (!input) {
      return;
    }

    const sanitized = input.toLowerCase().trim();
    const command = commands?.find((element) => element.command === sanitized);
    if (command) {
      onCommand(sanitized, command.action);
    }
  };

  const handleCommand = () => {
    if (!onCommand) {
      return;
    }

    console.log(commands);
    console.log(value);
    const command = commands?.find((element) => element.command === value);
    setValue("");

    if (command) {
      onCommand(value, command.action);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (disabled) {
      setValue("");
      return;
    }

    e.preventDefault();

    const key = e.key.toLowerCase();
    switch (key) {
      case "backspace":
        if (value.length) {
          setValue(value.slice(0, -1));
        }
        break;

      case "enter":
        handleCommand();
        break;

      default:
        // support alphanumeric, space, and limited puntuation only
        const re = /[a-z0-9,.<>/?[\]{}'";:*&^%$#@!~]/;
        if (key.length === 1 && key.match(re)) {
          setValue(value + key);
        }
        break;
    }
  };

  // render effects
  useEffect(() => {
    // mount
    if (onRendered) {
      onRendered();
    }
    document.addEventListener("keydown", handleKeyDown);

    // unmount
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <div className={cn(css, "block lg:hidden")} onClick={handleMobileFocus}>
        {prompt && <span className={"prompt"}>{prompt}</span>}
        <span className={"input"} ref={ref}>
          {value}
        </span>
      </div>
      <div className={cn(css, "hidden lg:block")} onClick={handleFocus}>
        {prompt && <span className={"prompt"}>{prompt}</span>}
        <span className={"input"} ref={ref}>
          {value}
        </span>
      </div>
    </>
  );
};

export default Prompt;
