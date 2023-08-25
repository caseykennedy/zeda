import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function scrollTop(e: React.MouseEvent<HTMLButtonElement>) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  e.preventDefault()
}

const currentYear = new Date().getFullYear()

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function stringToURL(str: string) {
  return str.replace(/\s+/g, '-').toLowerCase()
}

export { cn, currentYear, scrollTop, stringToURL }
