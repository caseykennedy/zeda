type Props = {
  children: React.ReactNode
  bg?: string
  border?: string
  color?: string
  className?: string
  py?: string
  px?: string
  maxWidth?: string
  overflow?: string
}

const Section = ({
  children,
  className = '',
  py = 'gutter-y',
  px = 'gutter-x',
  maxWidth = 'w-full',
}: Props) => {
  return (
    <section className={`relative w-full ${className} ${py}`}>
      <div className={`md:max-w-site mx-auto h-full w-full ${px} ${maxWidth}`}>
        {children}
      </div>
    </section>
  )
}

export default Section
