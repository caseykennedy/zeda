export const scrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  e.preventDefault()
}

export const currentYear = new Date().getFullYear()
