import clsx from 'clsx'
import nav from 'config/nav-footer.json'
import Link from 'next/link'

import { Button } from 'components/Button'
import Icon from 'components/Icon'
import LinkArrow from 'components/LinkArrow'
import Logo from 'components/Logo'
import Separator from 'components/Separator'

const scrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  e.preventDefault()
}

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="gutter-y bg-black">
      <div className="gutter-x mx-auto flex w-full flex-col md:max-w-site">
        <div className="flex flex-row items-center justify-between">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="">
              <Logo />
            </Link>
          </div>

          <div>
            <Button variant="default" size="icon" onClick={scrollTop}>
              <Icon name="carat-up" />
            </Button>
          </div>
        </div>

        <div className="mt-[160px] flex flex-row items-center justify-between border-b border-silver-900 pb-4">
          <div>
            <div className="flex flex-row flex-nowrap gap-4">
              <Link href="/" className="text-silver-500 hover:text-violet-500">
                <Icon name="linkedin" size={20} />
              </Link>
              <Link href="/" className="text-silver-500 hover:text-violet-500">
                <Icon name="twitter" size={20} />
              </Link>
              <Link href="/" className="text-silver-500 hover:text-violet-500">
                <Icon name="instagram" size={20} />
              </Link>
            </div>
          </div>
          <div>
            <LinkArrow href="/contact" title="Contact" />
          </div>
        </div>

        <div className="gap gutter-y grid grid-cols-2 border-b border-silver-900 md:grid-cols-4 lg:grid-cols-8">
          {nav.map((item) => {
            console.log(item)
            return (
              <ul className="" key={item.name}>
                <li className="mb-4 font-display font-semibold capitalize tracking-wide text-white">
                  {item.link ? (
                    <Link href={item.link}>{item.name}</Link>
                  ) : (
                    item.name
                  )}
                </li>
                {item.sub?.map((sub) => (
                  <li className="py-0.5" key={sub.name}>
                    <Link
                      href={sub.link}
                      className="font-display font-medium capitalize tracking-wide text-silver-500 hover:text-white"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )
          })}
        </div>

        <div className="mt-4 flex flex-col items-start justify-between text-xs uppercase text-silver-800 md:flex-row md:items-center">
          <div>© {year} Zeda, Inc.</div>
          <div>Zeda Is An ISO 13485 Facility</div>
          <div>All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
