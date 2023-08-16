import type { JobPost, Post, Settings } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-rocket.png'

import FooterCTA from 'components/FooterCTA'
import JobPosts from 'components/JobPosts'
import Layout from 'components/Layout'

import AtGlance from './AtGlance'
import Hero from './Hero'
import IndexPageHead from './IndexPageHead'
import Mission from './Mission'
import SolutionSwiper from './SolutionSwiper'
import TrustedBy from './TrustedBy'
import WhyUs from './WhyUs'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  jobPosts: JobPost[]
  posts: Post[]
  settings: Settings
}

export const IndexPage = ({
  preview,
  loading,
  jobPosts,
  posts,
  settings,
}: IndexPageProps) => {
  // const [heroPost, ...morePosts] = posts || []
  // const { title = demo.title, description = demo.description } = settings || {}

  return (
    <Layout>
      <IndexPageHead settings={settings} />

      <Hero />
      {/* <div className="gutter h-24 bg-black" /> */}
      <Mission />
      <WhyUs />
      <AtGlance />
      <SolutionSwiper />
      <TrustedBy />

      <div className="h-72 bg-black" />

      <JobPosts
        title="Zeda is a workplace where people from different aspects of life come together to create an unstoppable team. With strong values, connections, and progressive attitudes, we make sure everyone feels their best."
        hasBtn={true}
        posts={jobPosts}
      />
      <FooterCTA
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
