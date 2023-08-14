import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-3 rounded-full font-sans font-semibold text-sm uppercase tracking-wider ring-offset-background-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border active:translate-y-0.5 hover:border-black whitespace-nowrap group',
  {
    variants: {
      variant: {
        default:
          'border border-silver-900 bg-transparent text-silver-400 hover:text-black hover:bg-silver-500',
        primary:
          'bg-black text-white hover:bg-black/80 hover:bg-violet-600 hover:border-black',
        secondary:
          'border border-transparent bg-silver-500 hover:bg-violet-600 text-white',
        accent: 'bg-violet-500 text-black hover:bg-violet-600 border-black',
        outline:
          'border border-black bg-white hover:bg-violet-600 hover:text-white',
        ghost:
          'border-none bg-transparent text-silver-400 hover:text-black hover:bg-silver-500',
        link: 'border-none text-black decoration-2 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-9 px-6 text-xs',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export default Button
