import type { Settings } from 'lib/sanity.queries'

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

type Props = {
  settings: Settings
}

export const AboutPage = ({ settings }: Props) => (
  <>
    <IndexPageHead settings={settings} />
    <Layout>
      <PageTitle title="We make things better for everyone" />
      <Hero />
      <AboutZeda />
      <AtGlanceGallery />
      <Team />
      <TextMarquee />
      <PartnersGrid />
      {/* <Careers /> */}
      <CtaFooter
        heading="Join forces with us. Let's change the world together"
        message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
        image="join-forces-corridor.jpg"
        alt="Zeda Inc. - Contact us"
        href="/contact"
        btnText="Get in touch"
      />
    </Layout>
  </>
)

export default AboutPage
