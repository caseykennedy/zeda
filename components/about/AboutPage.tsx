import { LayoutThemes } from 'lib/constants'
import { type Partner, type Person, type Settings } from 'lib/sanity.queries'
import HeroImg from 'public/images/about/work-suit.jpg'
import ctaImgSrc from 'public/images/bg-corridor.jpg'

import { FooterCTA, FooterCTAFigure } from 'components/FooterCTA'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import { PageHero, PageTitle } from 'components/ui'

import AtGlance from './AtGlance'
import PartnersGrid from './PartnersGrid'
import Team from './Team'
import TextMarquee from './TextMarquee'
import AboutZeda from './Zeda'

interface PageProps {
  partners: Partner[]
  people: Person[]
  settings: Settings
}

export const AboutPage = ({ partners, people, settings }: PageProps) => {
  return (
    <>
      <PageHead settings={settings} />
      <Layout>
        <PageTitle theme={LayoutThemes.dark}>
          <h1 className="max-w-[18ch]">We make things better for everyone</h1>
        </PageTitle>
        <PageHero
          image={HeroImg}
          alt="Zeda, Inc. - About us"
          className=" object-left-top"
        />
        <AboutZeda />
        <AtGlance />
        <Team people={people} />
        <TextMarquee />
        <PartnersGrid partners={partners} />
        <FooterCTA
          heading="Join forces with us. Let’s change the world together"
          message="<strong>Contact us</strong><br />We’d love to discuss the design and innovation challenges you are facing."
          href="/contact"
          btnText="Get in touch"
        >
          <FooterCTAFigure src={ctaImgSrc} alt="Zeda Inc. - Contact us" />
        </FooterCTA>
      </Layout>
    </>
  )
}

export default AboutPage
