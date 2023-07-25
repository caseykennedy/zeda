import { forwardRef } from 'react'
import { cn } from 'utils'

type Props = {
  children: React.ReactNode
  className?: string
  py?: string
  px?: string
  fullWidth?: boolean
}

const Section = ({
  children,
  className = '',
  py = 'gutter-y',
  px = 'gutter-x',
  fullWidth = true,
}: Props) => {
  return (
    <section className={cn(`relative w-full overflow-hidden`, className, py)}>
      <div
        className={cn(`mx-auto h-full w-full`, !fullWidth && `max-w-site`, px)}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
