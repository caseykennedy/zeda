import Link from 'next/link'

import Icon from 'components/Icon'

type Props = {
  href: string
  title: string
}

const ArrowLink = ({ href, title }: Props) => (
  <Link
    href={href}
    className="group relative flex flex-row items-center font-display text-sm font-medium uppercase tracking-wider text-white"
  >
    <Icon
      name="arrow-right"
      color="text-emerald-400"
      size={18}
      className="absolute right-0 hidden transition-all group-hover:block"
    />
    <span className="transition-all ease-out group-hover:-translate-x-6">
      {title}
    </span>
  </Link>
)

export default ArrowLink
