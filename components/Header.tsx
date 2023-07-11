import nav from 'config/nav.json'
import Link from 'next/link'

import Logo from 'components/Logo'

const Navigation = () => {
  return (
    <ul className="grid auto-cols-max grid-flow-col gap-6 text-white">
      {nav.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.link}
            className="font-display text-base capitalize tracking-wider"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Header = () => {
  return (
    <header className="overflow-none fixed top-0 z-40 h-[110px] w-full items-center border-b border-zinc-800 bg-black/80 backdrop-blur-lg">
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
          <Link
            href="/contact"
            className="font-display tracking-wider text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
