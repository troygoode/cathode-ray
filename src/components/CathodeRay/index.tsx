import * as Core from "@/components/CathodeRay/Core";
export { Core };

import { PropsWithChildren } from "react";
import { formatDate, subtractDays } from "@/utils/datetime";

export function Header({ label }: { label: string }) {
  function repeatString(str: string, num: number) {
    return new Array(num + 1).join(str);
  }

  return (
    <Core.Wrapper>
      <Core.Line>{label.toUpperCase()}</Core.Line>
      <Core.Line>{repeatString("=", label.length)}</Core.Line>
      <Core.Br />
    </Core.Wrapper>
  );
}

export function LockedDialog() {
  return (
    <Core.Dialog id="lockedDialog" style="alert">
      <Core.Line>ERROR! Authorization required.</Core.Line>
    </Core.Dialog>
  );
}

export function Back({
  label = "Back",
  target,
}: {
  label?: string;
  target: string;
}) {
  return (
    <Core.Wrapper>
      <Core.Br />
      <Core.Line>==========</Core.Line>
      <Core.Br />
      <Core.Link target={target}>&lt; {label.toUpperCase()}</Core.Link>
    </Core.Wrapper>
  );
}

export function Next({
  label = "Next",
  target,
}: {
  label?: string;
  target: string;
}) {
  return (
    <Core.Wrapper>
      <Core.Br />
      <Core.Line>==========</Core.Line>
      <Core.Br />
      <Core.Link target={target}>&gt; {label.toUpperCase()}</Core.Link>
    </Core.Wrapper>
  );
}

export type TLockedLinkProps = {
  ifLockedTarget?: string;
  ifLockedTargetType?: "dialog" | "link";
  hackable?: boolean;
  type?: "link" | "dialog";
  target: string;
};
export function LockedLink({
  children,
  ifLockedTarget = "lockedDialog",
  ifLockedTargetType = "dialog",
  hackable = false,
  target,
  type = "link",
}: PropsWithChildren<TLockedLinkProps>) {
  return hackable ? (
    <Core.Link
      target={[
        {
          target: ifLockedTarget,
          type: ifLockedTargetType,
          shiftKey: false,
        },
        {
          target,
          type,
          shiftKey: true,
        },
      ]}
    >
      {children}
    </Core.Link>
  ) : (
    <Core.Link
      target={[
        {
          target: ifLockedTarget,
          type: ifLockedTargetType,
          shiftKey: false,
        },
      ]}
    >
      {children}
    </Core.Link>
  );
}

export type TPProps = {
  style?: "alert";
};
export function P({ children, style }: PropsWithChildren<TPProps>) {
  return (
    <Core.Wrapper>
      <Core.Line style={style}>{children}</Core.Line>
      <Core.Br />
    </Core.Wrapper>
  );
}

export type TMapProps = {
  image: { src: string };
};
export function Map({ image }: TMapProps) {
  return (
    <Core.Wrapper>
      <Core.Bitmap src={image.src} />
      <Core.Br />
      <Core.Line>
        A copy of this schematic is now available via data tablet.
      </Core.Line>
    </Core.Wrapper>
  );
}

export type TRosterProps = {
  names: string[];
};
export function Roster({ names }: TRosterProps) {
  return (
    <Core.Wrapper>
      {names.map((name, index) => (
        <Core.Line key={index}>
          {String(index + 1).padStart(2, "0")}. {name}
        </Core.Line>
      ))}
    </Core.Wrapper>
  );
}

export type TFlipProps = {
  prefix?: string;
  options: string[];
};
export function Flip({ prefix, options }: TFlipProps) {
  return (
    <Core.Toggle>
      {options.map((option, index) => (
        <Core.ToggleOption key={index}>
          {prefix}
          {option}
        </Core.ToggleOption>
      ))}
    </Core.Toggle>
  );
}

export type TDialogLinkProps = {
  dialog: string;
  style?: "alert";
  label: string;
};
export function DialogLink({ dialog, style, label }: TDialogLinkProps) {
  return (
    <Core.Link
      target={[
        {
          target: dialog,
          type: "dialog",
          shiftKey: false,
        },
      ]}
      style={style}
    >
      {label}
    </Core.Link>
  );
}

export type TPasswordRedirectProps = {
  password: string;
  target: string;
  label: string;
};
export function PasswordRedirect({
  password,
  target,
  label,
}: TPasswordRedirectProps) {
  return (
    <Core.Prompt
      commands={[
        {
          command: password,
          action: {
            type: "link",
            target,
          },
        },
      ]}
    >
      {label}
    </Core.Prompt>
  );
}

export type TLoadingProps = {
  lines?: number;
};
export function Loading({ lines = 1 }: TLoadingProps) {
  return (
    <Core.Wrapper>
      {[...Array(lines)].map((_, index) => (
        <Core.Line key={index}>
          ..........................................
        </Core.Line>
      ))}
    </Core.Wrapper>
  );
}

export type TTimelineEntry = [number, string[]];

export type TTimelineProps = {
  start: Date;
  events: TTimelineEntry[];
};
export function Timeline({ start, events }: TTimelineProps) {
  let counter = 0;
  const now = (n: number) => {
    counter += n;
    return counter;
  };
  return (
    <Core.Wrapper>
      {events.map(([days, lines], index) => (
        <Core.Line key={index}>
          {formatDate(subtractDays(start, now(days)))} &mdash;{" "}
          {lines.join(" :: ")}
        </Core.Line>
      ))}
    </Core.Wrapper>
  );
}
