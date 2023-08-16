import { type Partner, type Person, type Settings } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-corridor.jpg'

import FooterCTA from 'components/FooterCTA'
import IndexPageHead from 'components/index-page/IndexPageHead'
import Layout from 'components/Layout'
import PageTitle from 'components/ui/PageTitle'

import AtGlance from './AtGlance'
import Hero from './Hero'
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
      <IndexPageHead settings={settings} />
      <Layout>
        <PageTitle>
          <h1 className="max-w-[18ch]">We make things better for everyone</h1>
        </PageTitle>
        <Hero />
        <AboutZeda />
        <AtGlance />
        <Team people={people} />
        <TextMarquee />
        <PartnersGrid partners={partners} />
        {/* <Careers /> */}
        <FooterCTA
          heading="Join forces with us. Let's change the world together"
          message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
          src={ctaImgSrc}
          alt="Zeda Inc. - Contact us"
          href="/contact"
          btnText="Get in touch"
        />
      </Layout>
    </>
  )
}

export default AboutPage