import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names.
 * Combines clsx and tailwind-merge for better class name handling.
 */
export function cn(...classes) {
  return twMerge(clsx(...classes));
}