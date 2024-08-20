import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const twClassMerge = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
