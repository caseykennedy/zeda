import type { JobPost, Partner, Post, Settings } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-rocket.png'

import FooterCTA from 'components/FooterCTA'
import JobList from 'components/JobList'
import Layout from 'components/Layout'

import AtGlance from './AtGlance'
import FeaturedPosts from './FeaturedPosts'
import Hero from './Hero'
import IndexPageHead from './IndexPageHead'
import Mission from './Mission'
import SolutionSwiper from './SolutionSwiper'
import TrustedBy from './TrustedBy'
import WhyUs from './WhyUs'

export interface IndexPageProps {
  jobPosts: JobPost[]
  insights: Post[]
  news: Post[]
  press: Post[]
  partners: Partner[]
  settings: Settings
}

export const IndexPage = ({
  jobPosts,
  insights,
  news,
  press,
  partners,
  settings,
}: IndexPageProps) => {
  return (
    <Layout>
      <IndexPageHead settings={settings} />
      <Hero />
      <Mission />
      <WhyUs />
      <AtGlance />
      <SolutionSwiper />
      <TrustedBy partners={partners} />
      <FeaturedPosts insights={insights} news={news} press={press} />
      <JobList
        title="Zeda is a workplace where people from different aspects of life come together to create an unstoppable team. With strong values, connections, and progressive attitudes, we make sure everyone feels their best."
        hasBtn={true}
        posts={jobPosts}
      />
      <FooterCTA
        heading="Join forces with us. Let's change the world together"
        message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
        src={ctaImgSrc}
        alt="Zeda Inc. - Contact us"
        href="/contact"
        btnText="Get in touch"
      />
    </Layout>
  )
}

export default IndexPage
