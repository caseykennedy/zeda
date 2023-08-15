import { format, parseISO } from 'date-fns'
import { cn } from 'utils'

export default function PostDate({
  dateString,
  className,
}: {
  dateString?: string
  className?: string
}) {
  if (!dateString) return null

  const date = parseISO(dateString)
  return (
    <time dateTime={dateString} className={cn(className)}>
      {format(date, 'MMM d — yyyy')}
    </time>
  )
}
