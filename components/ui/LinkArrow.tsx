import Link from 'next/link'
import { cn } from 'utils'

import Icon from 'components/ui/Icon'

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
  className?: string
}

const ArrowLink = ({ children, href, className, ...props }: Props) => (
  <Link
    href={href}
    className={cn(
      `text-silver group relative flex flex-row items-center font-display text-sm font-semibold uppercase tracking-wider transition-colors hover:text-silver-800 hover:dark:text-silver-200`,
      className
    )}
    {...props}
  >
    <span className="-translate-x-5 transition-all ease-out group-hover:-translate-x-2">
      <Icon
        name="arrow-right"
        className="opacity-0 transition-all group-hover:opacity-100"
      />
    </span>
    {children}
  </Link>
)

export default ArrowLink
