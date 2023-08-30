import { BrandThemes } from 'lib/constants'
import type { JobPost, Partner, Post, Settings } from 'lib/sanity.queries'
import ctaImgSrc from 'public/images/bg-rocket.png'
import HeroImg from 'public/images/technologies/mfg-orange-suit.jpg'

import FooterCTA from 'components/FooterCTA'
import TrustedBy from 'components/home/TrustedBy'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import { Button, Icon, PageHero, PageTitle } from 'components/ui'

import Capabilities from './Capabilities'
import Intro from './Intro'

interface Props {
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
}: Props) => {
  return (
    <Layout brand={BrandThemes.technologies}>
      <PageHead settings={settings} />
      <PageTitle>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex-[2]">
            <h1 className="max-w-[26ch]">
              We use technology to build a better world for everyone.
            </h1>
          </div>
          <div className="flex w-full flex-1 flex-row justify-end">
            <Button variant="primaryTech" asChild>
              <a href="#capabilities">
                <Icon
                  name="arrow-right"
                  className="relative -translate-x-1 transition-all group-hover:translate-x-1"
                />
                Capabilities
              </a>
            </Button>
          </div>
        </div>
      </PageTitle>
      <PageHero
        image={HeroImg}
        alt="Zeda, Inc. Technologies"
        className="object-left-top"
      />
      <Intro />
      <Capabilities />
      <TrustedBy partners={partners} />
      {/* <FooterCTA
        heading="Join forces with us. Let's change the world together"
        message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
        src={ctaImgSrc}
        alt="Zeda Inc. - Contact us"
        href="/contact"
        btnText="Get in touch"
      /> */}
    </Layout>
  )
}

export default IndexPage
