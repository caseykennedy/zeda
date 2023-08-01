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
}: Props) => {
  return (
    <section
      className={cn(
        `relative w-full overflow-hidden`,
        pt,
        pr,
        pb,
        pl,
        className
      )}
      {...props}
    >
      <div className={cn(`mx-auto h-full w-full`, maxWidth)}>{children}</div>
    </section>
  )
}

export default Section
