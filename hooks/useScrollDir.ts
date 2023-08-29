import { useEffect, useState } from 'react'

const useScrollDir = () => {
  const [scrollDir, setScrollDir] = useState<
    'scroll-down' | 'scroll-up' | null
  >(null)

  useEffect(() => {
    const threshold = 16
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scroll-down' : 'scroll-up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return { scrollDir, setScrollDir }
}

export default useScrollDir
