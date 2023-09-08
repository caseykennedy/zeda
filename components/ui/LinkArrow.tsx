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
      `group relative flex flex-row items-center font-display text-sm font-semibold uppercase tracking-wider`,
      className
    )}
    {...props}
  >
    <Icon
      name="arrow-right"
      color="text-emerald-400"
      size={18}
      className="absolute right-0 opacity-0 transition-all group-hover:opacity-100"
    />
    <span className="transition-all ease-out group-hover:-translate-x-6">
      {children}
    </span>
  </Link>
)

export default ArrowLink
