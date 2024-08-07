import nav from 'config/nav-footer.json'
import Link from 'next/link'
import { currentYear, scrollTop } from 'utils'
import { type BrandTheme } from 'utils/constants'

import LogoSymbol from 'components/LogoSymbol'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import LinkArrow from 'components/ui/LinkArrow'
import Separator from 'components/ui/Separator'

const social = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://linkedin.com/company/zedainc',
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    href: 'https://twitter.com/PrinterPrezz',
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://instagram.com/printerprezz/',
  },
]

const SocialList = () =>
  social.map(({ name, icon, href }, idx) => (
    <a
      key={idx}
      href={href}
      className="text-silver-500 hover:text-white"
      rel="nofollow noreferrer"
      aria-label={`Follow us on ${name}`}
    >
      <Icon name={icon} />
    </a>
  ))

const NavList = () =>
  nav.map((item) => (
    <ul
      className="border-l border-silver-900 pl-5 font-display font-medium capitalize tracking-wide"
      key={item.name}
    >
      <li className="mb-4 text-sm font-medium uppercase tracking-wider text-silver-500">
        {item.link ? <Link href={item.link}>{item.name}</Link> : item.name}
      </li>
      {item.sub?.map((sub) => (
        <li key={sub.name}>
          <Link
            href={sub.link}
            className=" inline-block whitespace-nowrap py-0.5 text-white transition-all hover:pl-0.5 hover:text-violet-500"
          >
            {sub.name}
          </Link>
        </li>
      ))}
    </ul>
  ))

const Footer = ({ brand }: { brand?: BrandTheme }) => {
  return (
    <footer className="gutter-y dark border-t border-silver-900 bg-black">
      <div className="gutter-x mx-auto flex w-full flex-col md:max-w-site">
        <div className="gap grid grid-cols-1 lg:mb-32 lg:grid-cols-2">
          <nav className="grid grid-cols-2 gap-10 xl:grid-cols-4">
            <NavList />
          </nav>

          <div className="mt-24 flex justify-center lg:mb-16 lg:mt-0 lg:justify-end">
            <Link href="/" aria-label="Back to home page">
              <LogoSymbol brand={brand} />
            </Link>
          </div>
        </div>

        <div className="mt-24 flex flex-row items-end justify-between pb-4">
          <div className="flex-1">
            <div className="flex flex-row flex-nowrap gap-4">
              <SocialList />
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <Button
              variant="primary"
              size="icon"
              className="border-silver-500 text-silver-500 hover:border-silver-800 hover:bg-silver-900 "
              onClick={scrollTop}
              role="button"
              aria-label="Scroll to top"
            >
              <Icon name="chevron-up" />
            </Button>
          </div>
          <div className="flex flex-1 justify-end text-white">
            {/* <Link
              href="/contact"
              className="font-display font-medium capitalize tracking-wider text-white"
            >
              Contact
            </Link> */}
            <LinkArrow href="/contact">Contact</LinkArrow>
          </div>
        </div>
      </div>

      <Separator className="bg-silver-900" />

      <div className="gutter-x mx-auto max-w-site pb-4 sm:pb-0">
        <div className="flex flex-col items-start justify-between pt-4 text-xs uppercase text-silver-700 sm:flex-row">
          <div className="flex-1">© {currentYear} Zeda, Inc.</div>
          <div className="flex-1 sm:text-center">
            {/* <Link href="/certifications">Zeda Is An ISO 13485 Facility</Link> */}
          </div>
          <div className="flex-1 sm:text-right">All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
