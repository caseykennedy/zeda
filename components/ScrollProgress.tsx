import useScrollTop from 'hooks/useScrollTop'

const ScrollProgress = () => {
  const { scrollTop } = useScrollTop()

  return (
    <div className="sticky left-0 top-0 z-50 mb-[-5px] h-[5px] w-full bg-background-500">
      <div
        className={`h-[5px] bg-violet-500`}
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  )
}

export default ScrollProgress
