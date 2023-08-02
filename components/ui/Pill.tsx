import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'utils'

export const pillVariants = cva(
  'inline-flex items-center justify-center gap-3 rounded-full font-sans font-semibold text-xs uppercase tracking-wide transition-colors whitespace-nowrap group',
  {
    variants: {
      variant: {
        default: 'text-white hover:text-black bg-silver-500',
        primary: 'bg-violet-500 text-white ',
        secondary:
          'border-silver-600 bg-black text-white hover:bg-black/80 hover:bg-violet-600 hover:border-black',
        outline: 'border border-silver-500 bg-white text-silver-600',
      },
      size: {
        default: 'h-7 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(pillVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Pill.displayName = 'Pill'

export default Pill
