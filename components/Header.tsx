import { forwardRef } from 'react'
import {
  BackpackIcon,
  HamburgerMenuIcon,
  LightningBoltIcon,
  PaperPlaneIcon,
  ReaderIcon,
  VideoIcon,
} from '@radix-ui/react-icons'
import useScrollDir from 'hooks/useScrollDir'
import useScrollTop from 'hooks/useScrollTop'
import Link from 'next/link'
import { useRouter } from 'next/router'
import careersBgImg from 'public/images/hero-careers.jpg'
import { cn } from 'utils'
import { type BrandTheme, BrandThemes, type LayoutTheme } from 'utils/constants'

import Img from 'components/Img'
import Logo from 'components/Logo'
import LogoSymbol from 'components/LogoSymbol'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from 'components/NavigationMenu'
import NavigationSheet from 'components/NavigationSheet'
import LinkArrow from 'components/ui/LinkArrow'

export const INSIGHTS_SLUG = 'insights'

export const solutionsNav = [
  {
    title: 'zeda technologies',
    href: '/technologies',
    desc: 'Space, defense &amp; aerospace',
    icon: <LogoSymbol brand={BrandThemes.TECHNOLOGIES} width={32} />,
    className: 'hover:border-blue-500',
  },
  {
    title: 'zeda health',
    href: '/health',
    desc: 'Orthopaedic implants &amp; nanotech',
    icon: <LogoSymbol brand={BrandThemes.HEALTH} width={32} />,
    className: 'hover:border-yellow-500',
  },
]

export const insightsNav = [
  {
    title: 'insights',
    href: '/insights',
    desc: 'Data-rich industry insights',
    icon: <LightningBoltIcon />,
  },
  {
    title: 'white papers',
    href: '/insights/#white-papers',
    desc: 'Industry experience &amp; knowledge',
    icon: <PaperPlaneIcon />,
  },
  {
    title: 'videos',
    href: '/videos',
    desc: 'Interviews, b-roll &amp; more',
    icon: <VideoIcon />,
  },
]

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'focus:text-accent-foreground group-hover: inline select-none py-2.5 font-display font-medium capitalize tracking-wider text-white no-underline outline-none transition-all hover:pl-0.5 hover:text-violet-500 focus:text-violet-500 active:text-violet-400',
          className
        )}
        {...props}
      >
        {title}
      </a>
    </NavigationMenuLink>
  )
})
ListItem.displayName = 'ListItem'

const Navigation = () => {
  const router = useRouter()

  const activeClasses = 'text-silver-800 dark:text-silver-200'
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              router.asPath.includes('about') && activeClasses,
              router.asPath.includes('careers') && activeClasses
            )}
          >
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap grid w-full text-white lg:grid-cols-3">
              <li className="flex flex-col">
                <div className="gap group grid grid-cols-2 content-center lg:-mb-14">
                  <div className="flex flex-col items-start justify-end">
                    <div className="mb-6 font-display text-sm font-medium uppercase tracking-wider text-silver-500">
                      Company
                    </div>
                    <ListItem href="/about" title="About Zeda" />
                    <ListItem href="/about/#leadership" title="Leadership" />
                  </div>
                  <div className="flex flex-col items-start justify-end">
                    <ListItem href="/about/#partners" title="Partners" />
                    <ListItem href="/contact" title="Contact" />
                  </div>
                </div>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="group relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded border border-silver-900 p-6 no-underline outline-none hover:border-violet-500"
                    href="/careers"
                  >
                    <div className="relative z-10">
                      <div>
                        <BackpackIcon className="h-6 w-6 transition-transform group-hover:-translate-y-1.5 group-hover:text-violet-500" />
                      </div>
                      <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                        Careers
                      </div>
                      <p className="text-base text-silver-400">
                        Explore open career opportunities
                      </p>
                    </div>
                    <figure className="absolute inset-0 z-0 transition-transform group-hover:scale-105">
                      <Img
                        src={careersBgImg}
                        alt="Careers"
                        fill={true}
                        sizes="(max-width: 768px) 300px"
                        className="object-cover object-center brightness-75 transition-all group-hover:brightness-50"
                      />
                      <div className="absolute z-[1] h-full w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    </figure>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="group flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-6 no-underline outline-none transition-colors hover:border-violet-500 hover:bg-silver-900/30"
                    href="/news"
                  >
                    <div>
                      <ReaderIcon className="h-6 w-6 transition-transform group-hover:-translate-y-1.5 group-hover:text-violet-500" />
                    </div>
                    <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                      Newsroom
                    </div>
                    <p className="text-base text-silver-400">
                      Get the latest scoop on Zeda
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              router.asPath.includes('technologies') && activeClasses,
              router.asPath.includes('health') && activeClasses
            )}
          >
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap grid w-full max-w-[1024px] text-white lg:grid-cols-2">
              {solutionsNav.map(
                ({ title, href, desc, icon, className }, idx) => (
                  <li key={idx}>
                    <NavigationMenuLink asChild>
                      <Link
                        className={cn(
                          `group flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-6 text-lg no-underline outline-none transition-colors hover:border-violet-500 hover:bg-silver-900/30`,
                          className
                        )}
                        href={href}
                      >
                        <div className="transition-transform group-hover:-translate-y-1.5">
                          {icon}
                        </div>
                        <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                          {title}
                        </div>
                        <p
                          dangerouslySetInnerHTML={{ __html: desc }}
                          className="text-base text-silver-400"
                        />
                      </Link>
                    </NavigationMenuLink>
                  </li>
                )
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              router.asPath.includes('insights') && activeClasses,
              router.asPath.includes('videos') && activeClasses
            )}
          >
            Insights
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap grid w-full text-white lg:grid-cols-3">
              {insightsNav.map(({ title, href, desc, icon }, idx) => (
                <li key={idx}>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-6 text-lg no-underline outline-none transition-colors hover:border-violet-500 hover:bg-silver-900/30"
                      href={href}
                    >
                      <div className="transition-transform group-hover:-translate-y-1.5 group-hover:text-violet-500 [&>svg]:h-6 [&>svg]:w-6">
                        {icon}
                      </div>
                      <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                        {title}
                      </div>
                      <p
                        dangerouslySetInnerHTML={{ __html: desc }}
                        className="text-base text-silver-400"
                      />
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                `hover:text-silver-800 dark:hover:text-silver-200`,
                router.asPath.includes('news') && activeClasses
              )}
            >
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Header = ({
  brand = BrandThemes.ZEDA,
  theme,
}: {
  brand: BrandTheme
  theme: LayoutTheme
}) => {
  const { hasScrolled } = useScrollTop()
  const { scrollDir } = useScrollDir()

  const scrollDown = scrollDir === 'scroll-down'

  return (
    <header
      className={cn(
        `overflow-none fixed z-40 h-18 w-full items-center transition-all md:h-header`,
        theme,
        scrollDown ? '-translate-y-[100px]' : 'translate-y-0'
      )}
    >
      <div
        className={cn(
          'h-full w-full content-center border-b border-silver-500/20 text-black dark:border-silver-300/20 dark:text-white md:dark:hover:bg-black',
          hasScrolled && 'bg-white dark:bg-black'
        )}
      >
        <div className="gutter-x gap mx-auto grid h-full w-full grid-cols-2 content-center md:max-w-site md:grid-cols-6">
          <div className="col-span-1 flex items-center md:col-span-2">
            <Link
              href="/"
              className="inline-block"
              aria-label="Back to home page"
            >
              <Logo brand={brand} className="w-[116px] sm:w-[138px]" />
            </Link>
          </div>

          <div className="col-start-3 hidden items-center md:flex lg:col-start-4">
            <Navigation />
          </div>

          <div className="col-span-1 col-start-6 flex items-center justify-end lg:col-start-6">
            <div className="hidden md:block">
              <LinkArrow
                href="/contact"
                className="text-lg capitalize tracking-wide"
              >
                Contact
              </LinkArrow>
            </div>

            <div className="flex items-center md:hidden">
              <NavigationSheet>
                <HamburgerMenuIcon className="h-8 w-8" />
              </NavigationSheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
