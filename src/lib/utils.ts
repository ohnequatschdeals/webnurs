import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind className merge utility.
 * Example: cn("px-2", condition && "bg-red-500")
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
