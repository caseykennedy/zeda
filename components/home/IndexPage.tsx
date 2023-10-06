import type { JobPost, Partner, Post, Settings } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-tech-suit.jpg'

import { FooterCTA, FooterCTAFigure } from 'components/FooterCTA'
import JobList from 'components/JobList'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import TrustedBy from 'components/TrustedBy'

import AtGlance from './AtGlance'
import FeaturedPosts from './FeaturedPosts'
import Hero from './Hero'
import Mission from './Mission'
import SolutionSwiper from './SolutionSwiper'
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
      <PageHead settings={settings} />
      <Hero />
      <Mission />
      <WhyUs />
      <AtGlance />
      <SolutionSwiper />
      <TrustedBy
        title="We power highly regulated industries through our unique powder-to-finished-part end to end solution. By fusing nanotech with advanced additive technologies, we can build on a digital manufacturing platform that allows us to deploy anywhere. Supply chain issues eliminated."
        partners={partners}
      />
      <FeaturedPosts insights={insights} news={news} press={press} />
      <JobList
        title="Zeda is a workplace where people come together in order to make a difference."
        hasBtn={true}
        posts={jobPosts}
      />
      <FooterCTA
        message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
        href="/contact"
        btnText="Get in touch"
      >
        <FooterCTAFigure
          src={ctaImgSrc}
          alt="Zeda Inc. - Contact us"
          overlayColor="bg-violet-600"
          className="object-[-500px_top] opacity-20 mix-blend-hard-light grayscale sm:object-right"
        />
      </FooterCTA>
    </Layout>
  )
}

export default IndexPage
