import React, { ButtonHTMLAttributes } from "react";
import { twClassMerge } from "../../utils/twClassMerge";

const Button = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={twClassMerge(
        "shadow-brutalism border-2 w-fit px-4 py-2 rounded border-black hover:shadow-brutalism-alt transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
