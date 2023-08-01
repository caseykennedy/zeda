import { forwardRef, useEffect } from 'react'
import { FileTextIcon } from '@radix-ui/react-icons'
import useScrollDir from 'hooks/useScrollDir'
import useScrollTop from 'hooks/useScrollTop'
import Link from 'next/link'
import careersBgImg from 'public/images/bg-nav-careers-b.jpg'
import { cn } from 'utils'

import Img from 'components/Img'
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

const navData = [
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

const solutionsNav = [
  {
    title: 'technologies',
    desc: 'tech',
    icon: <FileTextIcon />,
  },
  {
    title: 'health',
    desc: 'medical',
    icon: <FileTextIcon />,
  },
]

const insightsNav = [
  {
    title: 'articles',
    desc: 'Industry experience &amp; knowledge',
    icon: <FileTextIcon />,
  },
  {
    title: 'videos',
    desc: 'Industry experience &amp; knowledge',
    icon: <FileTextIcon />,
  },
  {
    title: 'white papers',
    desc: 'Industry experience &amp; knowledge',
    icon: <FileTextIcon />,
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
          'focus:text-accent-foreground group-hover: inline select-none py-2.5 font-display font-medium capitalize tracking-wider text-white no-underline outline-none transition-all hover:pl-0.5 hover:text-silver-200 focus:text-silver-500 active:text-violet-500',
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
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap grid w-full text-white lg:grid-cols-3">
              <li className="flex flex-col">
                <div className="gap group grid grid-cols-2 content-center">
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
                    className="group relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded border border-silver-900 p-6 no-underline outline-none hover:border-silver-800"
                    href="/careers"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="relative z-10">
                      <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                        Careers
                      </div>
                      <div className="text-silver-200">
                        Explore open career opportunities.
                      </div>
                    </div>
                    <figure className="absolute inset-0 z-0 transition-transform group-hover:scale-105">
                      <Img
                        src={careersBgImg}
                        alt="Careers"
                        fill={true}
                        // width={600}
                        // height={250}
                        sizes="(max-width: 768px) 300px"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center top',
                        }}
                      />
                      <div className="absolute z-[1] h-full w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    </figure>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="group flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-6 text-lg no-underline outline-none transition-colors hover:border-silver-800 hover:bg-silver-900/30"
                    href="/news"
                  >
                    <div>
                      <FileTextIcon className="h-6 w-6 transition-transform group-hover:-translate-y-1.5" />
                    </div>
                    <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                      Newsroom
                    </div>
                    <p className="text-silver-200">
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
            <ul className="gap grid w-full max-w-[1024px] text-white lg:grid-cols-2">
              {solutionsNav.map(({ title, desc, icon }, idx) => (
                <li key={idx}>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-6 text-lg no-underline outline-none transition-colors hover:border-silver-800 hover:bg-silver-900/30"
                      href="/news"
                    >
                      <div className="transition-transform group-hover:-translate-y-1.5 [&>svg]:h-6 [&>svg]:w-6">
                        {icon}
                      </div>
                      <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                        {title}
                      </div>
                      <p
                        dangerouslySetInnerHTML={{ __html: desc }}
                        className="text-silver-200"
                      />
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Insights</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="gap grid w-full text-white lg:grid-cols-3">
              {insightsNav.map(({ title, desc, icon }, idx) => (
                <li key={idx}>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-6 text-lg no-underline outline-none transition-colors hover:border-silver-800 hover:bg-silver-900/30"
                      href="/news"
                    >
                      <div className="transition-transform group-hover:-translate-y-1.5 [&>svg]:h-6 [&>svg]:w-6">
                        {icon}
                      </div>
                      <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                        {title}
                      </div>
                      <p
                        dangerouslySetInnerHTML={{ __html: desc }}
                        className="text-silver-200"
                      />
                    </Link>
                  </NavigationMenuLink>
                </li>
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
