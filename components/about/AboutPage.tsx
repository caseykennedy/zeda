import { type Partner, type Person, type Settings } from 'lib/sanity.queries'
import HeroImg from 'public/images/about/hero-suit.jpg'
import ctaImgSrc from 'public/images/bg-rocket.png'
import { LayoutThemes } from 'utils/constants'

import { FooterCTA, FooterCTAFigure } from 'components/FooterCTA'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import PageHero from 'components/PageHero'
import PageTitle, { Heading1FadeIn } from 'components/PageTitle'
import TextMarquee from 'components/TextMarquee'
import { Button, Icon } from 'components/ui'

import AtGlance from './AtGlance'
import PartnersGrid from './PartnersGrid'
import Team from './Team'
import AboutZeda from './Zeda'

interface PageProps {
  partners: Partner[]
  people: Person[]
  settings: Settings
}

export const AboutPage = ({ partners, people, settings }: PageProps) => {
  return (
    <>
      <PageHead
        settings={settings}
        page={{
          title: 'About',
          description:
            'Zeda was born out of the desire of a select group of individuals to leverage their advanced manufacturing and technology backgrounds to help companies solve some of their most difficult challenges.',
        }}
      />
      <Layout>
        <PageTitle theme={LayoutThemes.DARK}>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="flex-[2]">
              <Heading1FadeIn>
                <h1 className="max-w-[18ch]">
                  We make things better for everyone
                </h1>
              </Heading1FadeIn>
            </div>
            <div className="flex w-full flex-1 flex-row justify-end">
              <Button variant="primary" asChild>
                <a href="#leadership">
                  <Icon
                    name="arrow-right"
                    className="relative -translate-x-1 transition-all group-hover:translate-x-1"
                  />
                  Leadership
                </a>
              </Button>
            </div>
          </div>
        </PageTitle>
        <PageHero
          image={HeroImg}
          alt="Zeda, Inc. - About us"
          className=" object-left-top"
        />
        <AboutZeda />
        <AtGlance />
        <Team people={people} />
        <TextMarquee text="We build things better together." />
        <PartnersGrid partners={partners} />
        <FooterCTA
          heading="Join forces with us. Let's change the world together."
          message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
          href="/contact"
          btnText="Get in touch"
        >
          <FooterCTAFigure
            src={ctaImgSrc}
            alt="Zeda Inc. - Rocket ship"
            className="object-[-600px_top] sm:object-center"
          />
        </FooterCTA>
      </Layout>
    </>
  )
}

export default AboutPage
