// import { useEffect } from 'react'
import useScrollTop from 'hooks/useScrollTop'

const ScrollProgress = () => {
  const { scrollTop } = useScrollTop()

  // useEffect(() => {
  //   console.log('ScrollTop:', scrollTop)
  // }, [scrollTop])

  return (
    <div className="sticky left-0 top-0 z-50 mb-[-3px] h-[3px] w-full bg-black">
      <div
        className={`h-[3px] bg-violet-500`}
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  )
}

export default ScrollProgress
