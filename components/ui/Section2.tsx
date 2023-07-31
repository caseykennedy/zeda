import { cn } from 'utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  pl?: string
  pr?: string
}

interface SectionProps extends ContainerProps {
  pt?: string
  pb?: string
}

const Container = ({
  children,
  className,
}: // fullWidth,
// pl,
// pr,
ContainerProps) => (
  <div
    className={cn(
      `gutter-l gutter-r mx-auto h-full w-full max-w-site`,
      className
    )}
  >
    {children}
  </div>
)

const Section = ({
  children,
  className,
  // fullWidth = false,
  pt = 'gutter-t',
  pr = 'gutter-r',
  pb = 'gutter-b',
  pl = 'gutter-l',
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(`relative w-full overflow-hidden`, pt, pb, className)}
      {...props}
    >
      <Container className={cn(pl, pr)}>{children}</Container>
    </section>
  )
}

export default Section
