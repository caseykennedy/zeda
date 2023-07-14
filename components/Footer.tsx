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
        <div className="gap grid grid-cols-1 lg:grid-cols-2">
          <div className="mb-16">
            <Link href="/" className="">
              <Logo />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-3">
            {nav.map((item) => {
              console.log(item)
              return (
                <ul className="border-l border-silver-900 pl-5" key={item.name}>
                  <li className="mb-4 font-display font-semibold capitalize tracking-wide text-white">
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                  {item.sub?.map((sub) => (
                    <li className="mb-1" key={sub.name}>
                      <Link
                        href={sub.link}
                        className="font-display font-medium capitalize tracking-wide text-silver-500 last:mb-0 hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )
            })}
          </div>
        </div>

        <div className="mt-24 flex flex-row items-end justify-between pb-4">
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
            <Button variant="default" size="icon" onClick={scrollTop}>
              <Icon name="carat-up" />
            </Button>
          </div>
          <div>
            <LinkArrow href="/contact" title="Contact" />
          </div>
        </div>
      </div>

      <Separator className="bg-silver-900" />

      <div className="gutter-x mx-auto max-w-site pb-4 sm:pb-0">
        <div className="flex flex-col items-start justify-between pt-4 text-xs uppercase text-silver-800 sm:flex-row">
          <div className="flex-1">© {year} Zeda, Inc.</div>
          <div className="flex-1 sm:text-center">
            Zeda Is An ISO 13485 Facility
          </div>
          <div className="flex-1 sm:text-right">All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
