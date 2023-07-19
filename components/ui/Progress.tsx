import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import clsx from 'clsx'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={clsx(
      'bg-silver-200 relative h-[1px] w-full overflow-hidden',
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="bg-black h-full w-full flex-1"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
