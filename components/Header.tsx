import { forwardRef, useEffect } from 'react'
import useScrollDir from 'hooks/useScrollDir'
import useScrollTop from 'hooks/useScrollTop'
import Link from 'next/link'
import { cn } from 'utils'

import Logo from 'components/Logo'
import LinkArrow from 'components/ui/LinkArrow'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from 'components/ui/NavigationMenu'

// const Navigation = () => {
//   return (
//     <ul className="grid auto-cols-max grid-flow-col gap-10">
//       {nav.map((item, idx) => (
//         <li key={idx}>
//           <Link
//             href={item.link}
//             className="flex flex-row flex-nowrap items-center font-display font-medium capitalize tracking-wider text-white"
//           >
//             {item.name}
//             {/* <Icon name="carat-up" size={15} className="ml-1 rotate-180" /> */}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
// }

const navData: { title: string; href: string; description: string }[] = [
  {
    title: 'company',
    href: '/videos',
    description: 'about us',
  },
  {
    title: 'solutions',
    href: '/articles',
    description: 'about us',
  },
  {
    title: 'insights',
    href: '/community',
    description: 'about us',
  },
  {
    title: 'news',
    href: '/merch',
    description: 'about us',
  },
]

const ListItem = forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none py-2.5 font-display font-medium capitalize tracking-wider text-white no-underline outline-none transition-colors',
          className
        )}
        {...props}
      >
        <div>{title}</div>
      </a>
    </NavigationMenuLink>
  )
})
ListItem.displayName = 'ListItem'

const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap grid w-full text-white lg:grid-cols-3">
              <li className="flex flex-col">
                <div className="mb-6 font-display text-sm font-medium uppercase tracking-wider text-silver-500">
                  Company
                </div>
                <ListItem href="/docs" title="About Zeda" />
                <ListItem href="/docs/installation" title="Leadership" />
                {/* <ListItem href="/docs/primitives/typography" title="Partners" /> */}
                {/* <ListItem href="/docs/primitives/typography" title="Contact" /> */}
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-6 no-underline outline-none"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-1 mt-8 font-display text-lg font-medium capitalize tracking-wider text-white">
                      Careers
                    </div>
                    <p className="text-base text-silver-500">
                      Explore open career opportunities.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-6 text-lg no-underline outline-none"
                    href="/"
                  >
                    <div className="mb-1 mt-8 font-display font-medium capitalize tracking-wider text-white">
                      Newsroom
                    </div>
                    <p className="text-base text-silver-500">
                      Get the latest scoop on Zeda.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 text-white md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navData.map(({ title, href, description }) => (
                <ListItem key={title} title={title} href={href}>
                  {description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 text-white md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navData.map(({ title, href, description }) => (
                <ListItem key={title} title={title} href={href}>
                  {description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Newsroom
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Header = () => {
  const { hasScrolled } = useScrollTop()
  const { scrollDir, setScrollDir } = useScrollDir()

  const scrollDown = scrollDir === 'scroll-down'

  // useEffect(() => {
  //   console.log(scrollDir)
  // }, [scrollDir])

  return (
    <header
      className={`overflow-none fixed z-40 h-header w-full items-center transition-all hover:bg-black ${cn(
        scrollDown ? '-translate-y-[100px]' : 'translate-y-0',
        hasScrolled && 'bg-black backdrop-blur-md'
      )}`}
    >
      <div className="gutter-x gap mx-auto grid h-full w-full grid-cols-2 content-center md:max-w-site md:grid-cols-6">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="">
            <Logo />
          </Link>
        </div>

        <div className="col-start-3 hidden items-center md:flex lg:col-start-4">
          <Navigation />
        </div>

        <div className="col-span-1 col-start-6 flex items-center justify-end lg:col-start-6">
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
