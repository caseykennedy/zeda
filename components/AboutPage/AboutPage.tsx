import { type Partner, type Person, type Settings } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-corridor.jpg'

import CtaFooter from 'components/CtaFooter'
import Careers from 'components/IndexPage/Careers'
import IndexPageHead from 'components/IndexPage/IndexPageHead'
import Layout from 'components/Layout'
import PageTitle from 'components/ui/PageTitle'

import AtGlanceGallery from './AtGlance'
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
        <PageTitle title="We make things better for everyone" />
        <Hero />
        <AboutZeda />
        <AtGlanceGallery />
        <Team people={people} />
        <TextMarquee />
        <PartnersGrid partners={partners} />
        {/* <Careers /> */}
        <CtaFooter
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
