import { cn } from 'utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  maxWidth?: string
  pt?: string
  pr?: string
  pb?: string
  pl?: string
}

const Section = ({
  children,
  className,
  maxWidth = 'max-w-site',
  pt = 'gutter-t',
  pr = 'gutter-r',
  pb = 'gutter-b',
  pl = 'gutter-l',
  ...props
}: Props): JSX.Element => {
  const sectionClasses = cn(
    'relative w-full overflow-hidden',
    pt,
    pb,
    className
  )
  const containerClasses = cn('mx-auto h-full w-full', maxWidth, pl, pr)

  return (
    <section className={sectionClasses} {...props}>
      <div className={containerClasses}>{children}</div>
    </section>
  )
}

export default Section
