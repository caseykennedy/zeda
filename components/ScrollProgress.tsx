import { useEffect, useState } from 'react'
import useScrollTop from 'hooks/useScrollTop'

const ScrollProgress = () => {
  const { scrollTop } = useScrollTop()

  useEffect(() => {
    console.log('ScrollTop:', scrollTop)
  }, [scrollTop])

  return (
    <div className="sticky left-0 top-[88px] z-10 h-[3px] w-full bg-black">
      <div
        className={`h-[3px] bg-emerald-500`}
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  )
}

export default ScrollProgress
