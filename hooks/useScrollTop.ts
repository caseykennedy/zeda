import { useEffect, useState } from 'react'

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop
    // This is responsible for subtracticing the total height of the page - where the page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    // This will calculate the final total of the percentage of how much the page has scrolled.
    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
    setHasScrolled(scrolled > 0)
  }

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener('scroll', onScroll)

    //
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // useEffect(() => {
  //   console.log('ScrollTop:', scrollTop)
  //   console.log('HasScrolled:', hasScrolled)
  // }, [scrollTop, hasScrolled])

  return { scrollTop, hasScrolled }
}

export default useScrollTop
