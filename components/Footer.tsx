import clsx from 'clsx'
import nav from 'config/nav-footer.json'
import Link from 'next/link'

import Icon from 'components/Icon'
import LogoSymbol from 'components/LogoSymbol'
import Separator from 'components/Separator'
import Button from 'components/ui/Button'
import LinkArrow from 'components/ui/LinkArrow'

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
              <LogoSymbol />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {nav.map((item) => {
              console.log(item)
              return (
                <ul className="border-l border-silver-900 pl-5" key={item.name}>
                  <li className="mb-4 font-display font-semibold capitalize tracking-wide text-white">
                    {item.link ? (
                      <Link href={item.link}>{item.name}</Link>
                    ) : (
                      item.name
                    )}
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
              <Link href="/" className="text-silver-500 hover:text-white">
                <Icon name="linkedin" size={20} />
              </Link>
              <Link href="/" className="text-silver-500 hover:text-white">
                <Icon name="twitter" size={20} />
              </Link>
              <Link href="/" className="text-silver-500 hover:text-white">
                <Icon name="instagram" size={20} />
              </Link>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <Button variant="default" size="icon" onClick={scrollTop}>
              <Icon name="carat-up" />
            </Button>
          </div>
          <div className="flex flex-1 justify-end">
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
