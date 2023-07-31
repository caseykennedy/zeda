import * as React from 'react'
import { cn } from 'utils'

import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string
  title: string
  subTitle?: string
  btn?: JSX.Element
  children: React.ReactNode
  className?: string
}

const SectionPanel = ({
  heading,
  title,
  subTitle,
  btn,
  children,
  className,
  ...props
}: Props) => (
  <Section className={cn(className)} {...props}>
    {heading && <SectionTitle>{heading}</SectionTitle>}

    <div className="grid grid-cols-6 gap-10">
      <div className="col-span-6 mb-8 md:col-span-4">
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>

      <div className="col-span-6 flex md:col-span-2 md:col-start-5 md:justify-end">
        {subTitle && (
          <div>
            <p className="max-w-[40ch] text-lg">{subTitle}</p>
          </div>
        )}
        {btn && btn}
      </div>
    </div>

    <div className="mt-32 md:mt-64">{children}</div>
  </Section>
)

export default SectionPanel
