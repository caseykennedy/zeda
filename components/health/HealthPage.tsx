import { useEffect, useState } from 'react'
import { useNetworkState } from '@uidotdev/usehooks'
import { BrandThemes } from 'lib/constants'
import type { Partner, Settings } from 'lib/sanity.queries'
import HeroImg from 'public/images/health/hero-pieces.jpg'
import CtaImgSrc from 'public/images/hero-test.png'

import { FooterCTA, FooterCTAFigure } from 'components/FooterCTA'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import TextMarquee from 'components/TextMarquee'
import TrustedBy from 'components/TrustedBy'
import { Button, Icon, PageHero, PageTitle } from 'components/ui'

import Capabilities from './Capabilities'
import Intro from './Intro'
import Services from './Services'
import WhyUs from './WhyUs'

interface Props {
  partners: Partner[]
  settings: Settings
}

const HealthPage = ({ partners, settings }: Props) => {
  const network = useNetworkState()

  useEffect(() => {
    console.log(network)
  }, [network])

  return (
    <Layout brand={BrandThemes.HEALTH}>
      <PageHead
        settings={settings}
        page={{
          title: 'Health',
          description: 'health',
        }}
      />
      <PageTitle>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex-[2]">
            <h1 className="max-w-[26ch]">
              Pushing the upper limits of medical device technology
            </h1>
          </div>
          <div className="flex w-full flex-1 flex-row justify-end">
            <Button variant="primary" className="hover:bg-yellow-600" asChild>
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
      <WhyUs />
      <TextMarquee text="We accelerate innovative ideas at light speed." />
      <Capabilities />
      <Services />
      <TrustedBy
        title="We take pride in being at the forefront of advanced manufacturing. Our mission is to champion a thriving domestic manufacturing renaissance through innovation and technology."
        partners={partners}
      />
      {/* <FooterCTA
        heading="Join forces with us. Let's change the world together"
        message="<strong>Contact us</strong><br />We'd love to discuss the design and innovation challenges you are facing."
        href="/contact"
        btnText="Get in touch"
      >
        <FooterCTAFigure
          src={CtaImgSrc}
          alt="Zeda Inc. | Health"
          overlayColor="bg-yellow-600"
          // className=" opacity-80"
        />
      </FooterCTA> */}
    </Layout>
  )
}

export default HealthPage
