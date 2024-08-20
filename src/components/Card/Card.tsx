import { twClassMerge } from "../../utils/twClassMerge";
import React, { HtmlHTMLAttributes } from "react";

const Card = ({
  className,
  children,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twClassMerge("w-full p-8 bg-bg-purple-light", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
