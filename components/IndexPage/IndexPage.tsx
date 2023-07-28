import type { Post, Settings } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-rocket.png'

import CtaFooter from 'components/CtaFooter'
import Layout from 'components/Layout'
import MoreStories from 'components/MoreStories'

import AtGlance from './AtGlance'
import Careers from './Careers'
import Hero from './Hero'
import IndexPageHead from './IndexPageHead'
import Mission from './Mission'
import SolutionSwiper from './SolutionSwiper'
import TrustedBy from './TrustedBy'
import WhyUs from './WhyUs'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export const IndexPage = ({
  preview,
  loading,
  posts,
  settings,
}: IndexPageProps) => {
  // const [heroPost, ...morePosts] = posts || []
  // const { title = demo.title, description = demo.description } = settings || {}

  return (
    <Layout>
      <IndexPageHead settings={settings} />

      <Hero />
      <Mission />
      <WhyUs />
      <AtGlance />
      <SolutionSwiper />
      <TrustedBy />

      <div className="h-72 bg-black" />

      <Careers />
      <CtaFooter
        heading="Join forces with us. Let’s change the world together"
        message="<strong>Contact us</strong><br />We’d love to discuss the design and innovation challenges you are facing."
        src={ctaImgSrc}
        alt="Zeda Inc. - Contact us"
        href="/contact"
        btnText="Get in touch"
      />
    </Layout>
  )
}

export default IndexPage
