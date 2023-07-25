import type { Post, Settings } from 'lib/sanity.queries'

import CtaFooter from 'components/CtaFooter'
import Careers from 'components/IndexPage/Careers'
import IndexPageHead from 'components/IndexPage/IndexPageHead'
import Layout from 'components/Layout'

import Hero from './Hero'

export interface AboutPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
}

export const AboutPage = ({ preview, loading, settings }: AboutPageProps) => {
  // const [heroPost, ...morePosts] = posts || []
  // const { title = demo.title, description = demo.description } = settings || {}

  return (
    <Layout>
      <IndexPageHead settings={settings} />

      <Hero />

      <Careers />
      <CtaFooter
        heading="Join forces with us. Let’s change the world together"
        message="<strong>Contact us</strong><br />We’d love to discuss the design and innovation challenges you are facing."
        image="join-forces-corridor.jpg"
        alt="Zeda Inc. - Contact us"
        href="/contact"
        btnText="Get in touch"
      />
    </Layout>
  )
}

export default AboutPage
