import { cn } from 'utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  pt?: string
  pr?: string
  pb?: string
  pl?: string
}

const Section = ({
  children,
  className,
  fullWidth = false,
  pt = 'gutter-t',
  pr = 'gutter-r',
  pb = 'gutter-b',
  pl = 'gutter-l',
  ...props
}: Props) => {
  return (
    <section
      className={cn(`relative w-full overflow-hidden`, pt, pb, className)}
      {...props}
    >
      <div
        className={cn(
          `mx-auto h-full w-full`,
          !fullWidth && `max-w-site`,
          pl,
          pr
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
