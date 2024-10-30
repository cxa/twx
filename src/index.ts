import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const twx = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { twx as $, twx as default };
