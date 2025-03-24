import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const saveProfileToLocalStorage = (authData: object) => {
  localStorage.setItem('profile', JSON.stringify(authData));
};
