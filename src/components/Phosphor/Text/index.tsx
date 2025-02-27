import React, { FC, useEffect } from "react";

export interface TextProps {
  text: string;
  className?: string;
  onRendered?: () => void;
}

const Text: FC<TextProps> = (props) => {
  const { text, className, onRendered } = props;
  const css = ["__text__ w-full text-wrap", className ? className : null]
    .join(" ")
    .trim();

  // events
  const handleRendered = () => onRendered && onRendered();

  // this should fire on mount/update
  useEffect(() => handleRendered());

  return <div className={css}>{text}</div>;
};

export default Text;
