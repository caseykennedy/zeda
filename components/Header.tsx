import clsx from 'clsx'
import nav from 'config/nav.json'
import useScrollTop from 'hooks/useScrollTop'
import Link from 'next/link'

import Icon from 'components/Icon'
import LinkArrow from 'components/LinkArrow'
import Logo from 'components/Logo'

const Navigation = () => {
  return (
    <ul className="grid auto-cols-max grid-flow-col gap-6 text-white">
      {nav.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.link}
            className="font-display font-medium capitalize tracking-wider mix-blend-difference"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Header = () => {
  const { hasScrolled } = useScrollTop()

  return (
    <header
      className={`overflow-none fixed top-0 z-40 w-full items-center border-b border-white/10 transition-all ${clsx(
        hasScrolled ? 'h-[70px] bg-black' : 'h-[100px]'
      )}`}
    >
      <div className="gutter-x gap mx-auto grid h-full w-full grid-cols-2 content-center md:max-w-site lg:grid-cols-6">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/" className="">
            <Logo />
          </Link>
        </div>

        <div className="col-span-2 col-start-4 hidden items-center lg:flex">
          <Navigation />
        </div>

        <div className="col-span-1 col-start-2 flex items-center justify-end lg:col-start-6">
          <LinkArrow href="/contact" title="Contact" />
        </div>
      </div>
    </header>
  )
}

export default Header
