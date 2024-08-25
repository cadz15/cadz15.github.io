import { twClassMerge } from "../../utils/twClassMerge";
import React, { forwardRef, HtmlHTMLAttributes } from "react";

const Card = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
  (
    { className, children, ...props }: HtmlHTMLAttributes<HTMLDivElement>,
    ref
  ) => {
    return (
      <div
        className={twClassMerge("w-full p-8 bg-bg-purple-light", className)}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default Card;
