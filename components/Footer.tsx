import nav from 'config/nav-footer.json'
import Link from 'next/link'
import { currentYear, scrollTop } from 'utils'

import LogoSymbol from 'components/LogoSymbol'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import LinkArrow from 'components/ui/LinkArrow'
import Separator from 'components/ui/Separator'

const SocialList = () =>
  social.map(({ icon, href }, idx) => (
    <Link href={href} className="text-silver-500 hover:text-white" key={idx}>
      <Icon name={icon} size={20} />
    </Link>
  ))

const NavList = () =>
  nav.map((item) => (
    <ul
      className="border-l border-silver-900 pl-5 font-display font-medium capitalize tracking-wide"
      key={item.name}
    >
      <li className="mb-4 font-semibold text-white">
        {item.link ? <Link href={item.link}>{item.name}</Link> : item.name}
      </li>
      {item.sub?.map((sub) => (
        <li key={sub.name}>
          <Link
            href={sub.link}
            className="inline-block py-0.5 text-silver-400 transition-all hover:pl-0.5 hover:text-white"
          >
            {sub.name}
          </Link>
        </li>
      ))}
    </ul>
  ))

const Footer = () => {
  return (
    <footer className="gutter-x gutter-y border-t border-silver-900 bg-black">
      <div className="mx-auto flex w-full flex-col md:max-w-site">
        <div className="gap grid grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-10 xl:grid-cols-4">
            <NavList />
          </div>

          <div className="mb-16 flex justify-end">
            <Link href="/" className="">
              <LogoSymbol />
            </Link>
          </div>
        </div>

        <div className="gap gutter-y grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {/* {nav.map((item) => {
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
          })} */}
        </div>

        <div className="mt-24 flex flex-row items-end justify-between pb-4">
          <div className="flex-1">
            <div className="flex flex-row flex-nowrap gap-4">
              <SocialList />
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <Button variant="default" size="icon" onClick={scrollTop}>
              <Icon name="chevron-up" color="text-white" />
            </Button>
          </div>
          <div className="flex flex-1 justify-end">
            {/* <Link
              href="/contact"
              className="font-display font-medium capitalize tracking-wider text-white"
            >
              Contact
            </Link> */}
            <LinkArrow href="/contact" title="Contact" />
          </div>
        </div>
      </div>

      <Separator className="bg-silver-900" />

      <div className="gutter-x mx-auto max-w-site pb-4 sm:pb-0">
        <div className="flex flex-col items-start justify-between pt-4 text-xs uppercase text-silver-800 sm:flex-row">
          <div className="flex-1">© {currentYear} Zeda, Inc.</div>
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

const social = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: '/',
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    href: '/',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    href: '/',
  },
]
