import { DownloadIcon } from '@radix-ui/react-icons'
import type { Leadership, Partner, Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import ctaImgSrc from 'public/images/hands-on.jpg'
import HeroImg from 'public/images/technologies/mfg-orange-suit.jpg'
import { cn } from 'utils'
import { BrandThemes, LayoutThemes } from 'utils/constants'

import { FooterCTA, FooterCTAFigure } from 'components/FooterCTA'
import Layout from 'components/Layout'
import LeadershipPanel from 'components/LeadershipPanel'
import PageHead from 'components/PageHead'
import PageHero from 'components/PageHero'
import PageTitle, { Heading1FadeIn } from 'components/PageTitle'
import TextMarquee from 'components/TextMarquee'
import { Button, Icon } from 'components/ui'

import Capabilities from './Capabilities'
import Intro from './Intro'
import Services from './Services'
import WhyUs from './WhyUs'

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
      `group relative w-full border-t border-black bg-black text-silver-200 transition-all before:absolute before:left-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-500 hover:text-black hover:before:w-full data-[state=open]:border-silver-900`,
      className
    )}
    target="_blank"
  >
    <div className="gutter-y relative z-10 mx-auto flex w-full max-w-site flex-1 items-center justify-between text-left">
      <div className="gutter-x flex flex-nowrap items-center gap-4 md:gap-12">
        <h3 className="font-sans text-xl font-medium md:text-2xl">{title}</h3>
      </div>
      <div className="gutter-r">
        <DownloadIcon className="relative mr-1 h-6 w-6 shrink-0 transition-all" />
      </div>
    </div>
  </Link>
)

interface Props {
  leadership: Leadership
  partners: Partner[]
  settings: Settings
}

export const TechnologiesPage = ({ leadership, settings }: Props) => {
  return (
    <Layout brand={BrandThemes.TECHNOLOGIES}>
      <PageHead
        settings={settings}
        page={{
          title: 'Zeda Technologies',
          description:
            'Zeda, Inc. blends traditional methods like CNC machining and EDM with cutting-edge technologies like additive manufacturing and automation.',
        }}
      />
      <PageTitle theme={LayoutThemes.DARK}>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex-[2]">
            <Heading1FadeIn>
              <h1 className="max-w-[26ch]">
                Harnessing technology to build a better world for everyone
              </h1>
            </Heading1FadeIn>
          </div>
          <div className="flex w-full flex-1 flex-row justify-end">
            <Button variant="primary" className="hover:bg-blue-600" asChild>
              <a href="#capabilities">
                <Icon
                  name="arrow-right"
                  className="relative -translate-x-1 transition-all group-hover:translate-x-1"
                />
                Capabilities
              </a>
            </Button>
          </div>
        </div>
      </PageTitle>
      <PageHero
        image={HeroImg}
        alt="Zeda, Inc. Technologies"
        className="object-left-top"
      />
      <Intro />
      <WhyUs />
      <TextMarquee
        text="We accelerate innovative ideas at light speed."
        className="border-b border-t border-silver-900 bg-silver-950 text-silver-900/75"
      />
      <Capabilities />
      <Services />
      <LeadershipPanel
        people={leadership.people}
        title="At Zeda we leverage advanced manufacturing and technology backgrounds to help companies solve some of their most difficult problems."
      />
      <FooterCTA
        message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
        href="/contact"
        btnText="Get in touch"
      >
        <FooterCTAFigure
          src={ctaImgSrc}
          alt="Zeda Inc. - Contact us"
          overlayColor="bg-blue-600"
          className="opacity-20 mix-blend-hard-light grayscale"
        />
      </FooterCTA>
      <SolutionLink
        id={1}
        title="Supplier Manual Policy"
        href="/supplier-manual-policy.pdf"
        className="before:bg-blue-500"
      />
    </Layout>
  )
}

export default TechnologiesPage
