import { type BrandTheme, BrandThemes } from 'lib/constants'
import type { JobPost, Partner, Post, Settings } from 'lib/sanity.queries'
import HeroImg from 'public/images/about/work-suit.jpg'
import ctaImgSrc from 'public/images/bg-rocket.png'

import FooterCTA from 'components/FooterCTA'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import { PageHero, PageTitle } from 'components/ui'

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
    <Layout brand={BrandThemes.technologies}>
      <PageHead settings={settings} />

      <PageTitle>
        <h1 className="mb-2">Technologies</h1>
        <p className="max-w-[26ch] text-lg font-medium text-silver-500">
          Where innovation meets precision and ideas meet reality.
        </p>
      </PageTitle>
      <PageHero image={HeroImg} alt="Zeda, Inc. Technologies" />
      {/* <TrustedBy partners={partners} /> */}
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
