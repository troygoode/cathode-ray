import type { IScriptScreenContentLinkTarget } from "@/components/Phosphor/cassette";
import NextLink from "next/link";
import "./style.css";

import React, { FC, useEffect } from "react";

export interface LinkProps {
  text: string;
  target: string | IScriptScreenContentLinkTarget[];
  className?: string;

  onClick?: (
    target: string | IScriptScreenContentLinkTarget[],
    shiftKey: boolean
  ) => void;
  onRendered?: () => void;
}

const CustomLink: FC<LinkProps> = (props) => {
  const { text, target, className, onClick, onRendered } = props;
  const css = ["__link__", className ? className : null].join(" ").trim();

  let touches = 0;
  const handleTouchStart = (e: React.TouchEvent<HTMLSpanElement>) => {
    touches = e.touches.length;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLSpanElement>) => {
    e.preventDefault(); // prevents the click event firing
    console.log("handleTouchEnd");
    if (onClick) {
      onClick(target, touches > 1);
    }
    touches = 0;
  };

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    console.log("click");
    if (onClick) {
      onClick(target, e.shiftKey);
    }
  };
  const handleRendered = () => onRendered && onRendered();

  // this should fire on mount/update
  useEffect(() => handleRendered());

  return (
    <span
      className={css}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {text}
    </span>
  );
};

const Link: FC<LinkProps> = (props) => {
  const targets = Array.isArray(props.target) ? props.target : [props.target];
  const target = targets[0];

  if (
    target.hasOwnProperty("type") &&
    (target as IScriptScreenContentLinkTarget).type === "href"
  ) {
    const { text, className } = props;
    const css = ["__link__", className ? className : null].join(" ").trim();
    return (
      <NextLink
        href={(target as IScriptScreenContentLinkTarget).target}
        className={css}
      >
        {text}
      </NextLink>
    );
  } else {
    return <CustomLink {...props} />;
  }
};

export default Link;
