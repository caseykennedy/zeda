import { forwardRef } from 'react'
import { cn } from 'utils'

interface Props {
  children: React.ReactNode
}

const SectionTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mb-8 border-b border-black pb-4 font-sans font-medium uppercase leading-3',
      className
    )}
    {...props}
  />
))
SectionTitle.displayName = 'SectionTitle'

export default SectionTitle
