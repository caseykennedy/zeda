import type { Settings } from 'lib/sanity.queries'

import CtaFooter from 'components/CtaFooter'
import Careers from 'components/IndexPage/Careers'
import IndexPageHead from 'components/IndexPage/IndexPageHead'
import Layout from 'components/Layout'
import PageTitle from 'components/ui/PageTitle'

import Hero from './Hero'
import Team from './Team'
import AboutZeda from './Zeda'

export const AboutPage = (settings: Settings) => (
  <>
    <IndexPageHead settings={settings} />
    <Layout>
      <PageTitle title="We make things better for everyone" />
      <Hero />
      <AboutZeda />
      <Team />
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