import { useEffect } from 'react'
import clsx from 'clsx'
import nav from 'config/nav.json'
import useScrollDir from 'hooks/useScrollDir'
import useScrollTop from 'hooks/useScrollTop'
import Link from 'next/link'

import Logo from 'components/Logo'
import Icon from 'components/ui/Icon'
import LinkArrow from 'components/ui/LinkArrow'

const Navigation = () => {
  return (
    <ul className="grid auto-cols-max grid-flow-col gap-10">
      {nav.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.link}
            className="flex flex-row flex-nowrap items-center font-display font-medium capitalize tracking-wider text-white"
          >
            {item.name}
            {/* <Icon name="carat-up" size={15} className="ml-1 rotate-180" /> */}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Header = () => {
  const { hasScrolled } = useScrollTop()
  const { scrollDir, setScrollDir } = useScrollDir()

  const scrollDown = scrollDir === 'down'

  useEffect(() => {
    console.log(scrollDir)
  }, [scrollDir])

  return (
    <header
      className={`overflow-none fixed z-40 h-[90px] w-full items-center transition-all ${clsx(
        scrollDown ? '-translate-y-[100px]' : 'translate-y-0',
        hasScrolled && 'bg-black backdrop-blur-md'
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
          {/* <Link
            href="/contact"
            className="font-display font-medium capitalize tracking-wider text-white"
          >
            Contact
          </Link> */}
          <LinkArrow href="/contact" title="Contact" />
        </div>
      </div>
    </header>
  )
}

export default Header
