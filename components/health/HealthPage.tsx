import type { Leadership, Partner, Settings } from 'lib/sanity.queries'
import CtaImgSrc from 'public/images/bg-nanotech.jpg'
import HeroImg from 'public/images/health/hero-pieces.jpg'
import { BrandThemes } from 'utils/constants'

import { FooterCTA, FooterCTAFigure } from 'components/FooterCTA'
import Layout from 'components/Layout'
import LeadershipPanel from 'components/LeadershipPanel'
import PageHead from 'components/PageHead'
import PageHero from 'components/PageHero'
import PageTitle, { Heading1FadeIn } from 'components/PageTitle'
import TextMarquee from 'components/TextMarquee'
import TrustedBy from 'components/TrustedBy'
import { Button, Icon } from 'components/ui'

import Capabilities from './Capabilities'
import Intro from './Intro'
import Services from './Services'
import WhyUs from './WhyUs'

interface Props {
  leadership: Leadership
  partners: Partner[]
  settings: Settings
}

const HealthPage = ({ leadership, partners, settings }: Props) => {
  return (
    <Layout brand={BrandThemes.HEALTH}>
      <PageHead
        settings={settings}
        page={{
          title: 'Health',
          description: 'health',
        }}
      />
      <PageTitle>
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="flex-[2]">
            <Heading1FadeIn>
              <h1 className="max-w-[24ch]">
                Pushing the upper limits of medical device technology
              </h1>
            </Heading1FadeIn>
          </div>
          {/* <div className="flex w-full flex-1 flex-row justify-end">
            <Button
              variant="primary"
              className="hover:bg-yellow-600 hover:text-black"
              asChild
            >
              <a href="#capabilities">
                <Icon
                  name="arrow-right"
                  className="relative -translate-x-1 transition-all group-hover:translate-x-1"
                />
                Capabilities
              </a>
            </Button>
          </div> */}
        </div>
      </PageTitle>
      <PageHero
        image={HeroImg}
        alt="Zeda, Inc. Technologies"
        className="object-left-top"
      />
      <Intro />
      <WhyUs />
      {/* <TextMarquee
        text="We accelerate innovative ideas at light speed."
        className="border-b border-t border-silver-900 bg-silver-950 text-silver-900/75"
      /> */}
      {/* <Capabilities />
      <Services /> */}
      <TrustedBy
        title="Zeda Health is committed to making innovative healthcare accessible to all. Join us in imagining and creating the future of healthcare—one innovation at a time."
        partners={partners}
      />
      <FooterCTA
        message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
        href="/contact"
        btnText="Get in touch"
      >
        <FooterCTAFigure
          src={CtaImgSrc}
          alt="Zeda Inc. | Health"
          overlayColor="bg-yellow-600"
          className="opacity-50 mix-blend-hard-light grayscale"
        />
      </FooterCTA>
    </Layout>
  )
}

export default HealthPage
