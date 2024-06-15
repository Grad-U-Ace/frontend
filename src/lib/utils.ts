import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateThumbnail = (a: string, b: string) =>
  `https://avatar.vercel.sh/${a}-${b}`;
