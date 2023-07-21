import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function scrollTop(e: React.MouseEvent<HTMLButtonElement>) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  e.preventDefault()
}

export const currentYear = new Date().getFullYear()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
