import clsx from 'clsx'
import nav from 'config/nav.json'
import Link from 'next/link'

import Icon from 'components/Icon'
import Logo from 'components/Logo'

const Footer = () => {
  return (
    <footer className="gutter-y bg-black">
      <div className="gutter-x gap md:max-w-site mx-auto grid h-full w-full grid-cols-2 content-center lg:grid-cols-6">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/" className="">
            <Logo />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
