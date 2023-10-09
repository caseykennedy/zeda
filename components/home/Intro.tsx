import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { cn } from 'utils'

import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import SectionPanel from 'components/ui/SectionPanel'

const SolutionLink = ({
  id,
  title,
  href,
  className,
}: {
  id: number
  title: string
  href: string
  className?: string
}) => (
  <Link
    href={href}
    className={cn(
      `group relative w-full border-t border-black transition-all before:absolute before:left-0 before:z-0 before:h-full before:w-2 before:transition-all before:duration-500 hover:before:w-full data-[state=open]:border-silver-900`,
      className
    )}
  >
    <div className="gutter-y relative z-10 mx-auto flex w-full max-w-site flex-1 items-center justify-between text-left">
      <div className="gutter-x flex flex-nowrap items-center gap-4 md:gap-12">
        <div className="text-base">0{id}</div>
        <h3 className="font-sans text-xl font-medium md:text-3xl">{title}</h3>
      </div>
      <div className="gutter-r">
        <ArrowRightIcon className="relative right-4 h-6 w-6 shrink-0 transition-all duration-200 group-hover:right-0 md:h-8 md:w-8" />
      </div>
    </div>
  </Link>
)

const AtGlance = () => (
  <>
    <SectionPanel
      heading="Mission"
      title="Zeda is a leading global technology solutions company. Our foundation combines expertise from diverse industries, including additive manufacturing, nanotech, precision machining and regulatory know-how."
      btn={
        <Button variant="primary" asChild>
          <Link href="/about">
            <Icon
              name="arrow-right"
              className="relative -translate-x-1 transition-all group-hover:translate-x-1"
            />
            About Zeda
          </Link>
        </Button>
      }
    >
      <div />
    </SectionPanel>
    <SolutionLink
      id={1}
      title="Zeda Technologies"
      href="/technologies"
      className="before:bg-blue-500"
    />
    <SolutionLink
      id={2}
      title="Zeda Health"
      href="/health"
      className="before:bg-yellow-500"
    />
  </>
)

export default AtGlance
