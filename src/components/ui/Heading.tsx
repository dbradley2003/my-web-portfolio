import React from "react";
import { TagLine } from "./Tagline";

interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
  button?: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  className,
  title,
  text,
  tag,
  button,
}) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-3">{text}</p>}
      {button && <div className="mt-6">{button}</div>}
    </div>
  );
};
