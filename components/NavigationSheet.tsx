import {
  ArrowRightIcon,
  ChevronDownIcon,
  ReaderIcon,
} from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import careersBgImg from 'public/images/bg-nav-careers-b.jpg'
import { cn } from 'utils'

import { insightsNav, solutionsNav } from 'components/Header'
import Img from 'components/Img'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/Accordion'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from 'components/ui/Sheet'

const mobileNavStyle = cva(
  'flex-1 font-display text-lg font-semibold capitalize tracking-wide'
)

const Collapse = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title}>
        <AccordionTrigger className="border-b border-t-0 border-silver-900 px-0 data-[state=open]:border-black [&>div]:py-4 [&[data-state=open]>div>div>svg]:rotate-180">
          <div className={mobileNavStyle()}>{title}</div>

          <div>
            <ChevronDownIcon className="text-muted-foreground h-5 w-5 shrink-0 transition-transform duration-200" />
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="border-b border-silver-900 pb-6 pt-2">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const ListItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      className="focus:text-accent-foreground inline select-none py-2.5 font-display text-base font-medium capitalize tracking-wider text-white no-underline outline-none transition-all focus:text-violet-500 active:text-violet-400"
    >
      {title}
    </Link>
  )
}

const SingleLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link
      href={href}
      className={cn(
        mobileNavStyle(),
        `flex w-full items-center border-b border-silver-900 py-4`
      )}
    >
      {title}
      <ArrowRightIcon className="ml-auto h-5 w-5 shrink-0" />
    </Link>
  )
}

const NavigationSheet = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger aria-label="Open navigation">{children}</SheetTrigger>
      <SheetContent className="max-h-[100vh] overflow-y-auto">
        <SheetHeader>
          <div>
            <Collapse title="Company">
              <ul className="gap grid w-full text-white lg:grid-cols-3">
                <li className="flex flex-col">
                  <div className="gap group grid grid-cols-2 content-center">
                    <div className="flex flex-col items-start justify-end">
                      {/* <div className="mb-6 font-display text-sm font-medium uppercase tracking-wider text-silver-500">
                        Company
                      </div> */}
                      <ListItem href="/about" title="About Zeda" />
                      <ListItem href="/about/#leadership" title="Leadership" />
                    </div>
                    <div className="flex flex-col items-start justify-end">
                      <ListItem href="/about/#partners" title="Partners" />
                      <ListItem href="/contact" title="Contact" />
                    </div>
                  </div>
                </li>
                <li className="row-span-3 min-h-[138px]">
                  <Link
                    className="group relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded border border-silver-900 p-4 no-underline outline-none"
                    href="/careers"
                  >
                    <div className="relative z-10">
                      <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                        Careers
                      </div>
                      <p className="text-base text-silver-200">
                        Explore open career opportunities
                      </p>
                    </div>
                    <figure className="absolute inset-0 z-0 transition-transform">
                      <Img
                        src={careersBgImg}
                        alt="Careers"
                        fill={true}
                        sizes="(max-width: 768px) 300px"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center top',
                        }}
                        className="object-cover object-bottom"
                      />
                      <div className="absolute z-[1] h-full w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    </figure>
                  </Link>
                </li>
                <li className="row-span-3">
                  <Link
                    className="group flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-4 no-underline outline-none transition-colors"
                    href="/news"
                  >
                    <div>
                      <ReaderIcon className="h-6 w-6 transition-transform" />
                    </div>
                    <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                      Newsroom
                    </div>
                    <p className="text-base text-silver-200">
                      Get the latest scoop on Zeda
                    </p>
                  </Link>
                </li>
              </ul>
            </Collapse>

            <Collapse title="Solutions">
              <ul className="gap grid w-full max-w-[1024px] text-white lg:grid-cols-2">
                {solutionsNav.map(
                  ({ title, href, desc, icon, className }, idx) => (
                    <li key={idx}>
                      <Link
                        className={cn(
                          `flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-4 text-lg no-underline outline-none transition-colors`,
                          className
                        )}
                        href={href}
                      >
                        <div className="transition-transform">{icon}</div>
                        <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                          {title}
                        </div>
                        <p
                          dangerouslySetInnerHTML={{ __html: desc }}
                          className="text-base text-silver-200"
                        />
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </Collapse>

            <Collapse title="Insights">
              <ul className="gap grid w-full text-white lg:grid-cols-3">
                {insightsNav.map(({ title, href, desc, icon }, idx) => (
                  <li key={idx}>
                    <Link
                      className="group flex h-full w-full select-none flex-col justify-end rounded border border-silver-900 p-4 text-lg no-underline outline-none transition-colors"
                      href={href}
                    >
                      <div className="transition-transform [&>svg]:h-6 [&>svg]:w-6">
                        {icon}
                      </div>
                      <div className="mt-6 font-display text-xl font-semibold capitalize tracking-wider text-white">
                        {title}
                      </div>
                      <p
                        dangerouslySetInnerHTML={{ __html: desc }}
                        className="text-base text-silver-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Collapse>
            <SingleLink title="News" href="/news" />
            <SingleLink title="Contact" href="/contact" />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default NavigationSheet
