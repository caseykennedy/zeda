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
  maxWidth = 'max-w-site',
}: Props) => {
  return (
    <section className={`relative w-full ${className} ${py}`}>
      <div className={`mx-auto h-full w-full ${px} ${maxWidth}`}>
        {children}
      </div>
    </section>
  )
}

export default Section
