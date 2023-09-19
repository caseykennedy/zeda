import type { Partner, Settings } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/hands-on.jpg'
import HeroImg from 'public/images/technologies/mfg-orange-suit.jpg'
import { BrandThemes, LayoutThemes } from 'utils/constants'

import { FooterCTA, FooterCTAFigure } from 'components/FooterCTA'
import Layout from 'components/Layout'
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
  partners: Partner[]
  settings: Settings
}

export const TechnologiesPage = ({ partners, settings }: Props) => {
  return (
    <Layout brand={BrandThemes.TECHNOLOGIES}>
      <PageHead
        settings={settings}
        page={{
          title: 'Technologies',
          description:
            'Zeda, Inc. blends traditional methods like CNC machining and EDM with cutting-edge technologies like additive manufacturing, PECM and automation.',
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
      <TextMarquee text="We accelerate innovative ideas at light speed." />
      <Capabilities />
      <Services />
      <TrustedBy
        title="We take pride in being at the forefront of advanced manufacturing. Our mission is to champion a thriving domestic renaissance through innovation and technology."
        partners={partners}
      />
      <FooterCTA
        heading="Join forces with us. Let's change the world together"
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
    </Layout>
  )
}

export default TechnologiesPage
