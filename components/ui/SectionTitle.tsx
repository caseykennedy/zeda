import { forwardRef } from 'react'
import { cn } from 'utils'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  dark?: boolean
}

const SectionTitle = forwardRef<HTMLParagraphElement, Props>(
  ({ className, dark, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mb-8 border-b border-black pb-4 font-sans font-medium uppercase leading-3 text-black',
        dark && 'border-silver-800 text-silver-500',
        className
      )}
      {...props}
    />
  )
)
SectionTitle.displayName = 'SectionTitle'

export default SectionTitle
