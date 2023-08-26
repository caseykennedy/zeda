import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from 'utils'

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value = 0, ...props }, ref) => {
  const sectionClasses = cn(
    'relative h-[1px] w-full overflow-hidden bg-silver-200',
    className
  )
  const indicatorStyle = { transform: `translateX(-${100 - value}%)` }

  return (
    <ProgressPrimitive.Root ref={ref} className={sectionClasses} {...props}>
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-black"
        style={indicatorStyle}
      />
    </ProgressPrimitive.Root>
  )
})

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
