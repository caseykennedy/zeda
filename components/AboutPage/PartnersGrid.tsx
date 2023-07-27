import * as React from 'react'
import {
  FaceIcon,
  PersonIcon,
  RocketIcon,
  RulerSquareIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import IAmGroot from 'public/images/groot.jpg'
import LogoCarbon from 'public/images/partners/white/carbon.png'

import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import Img from 'components/ui/Img'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

type FeatureShape = {
  icon: JSX.Element
  title: string
  description: string
}

const data: FeatureShape[] = [
  {
    icon: <RocketIcon />,
    title: 'Elevate your platform',
    description:
      'Expand use cases, drive product stickiness, and build stronger customer relationships.',
  },
  {
    icon: <RulerSquareIcon />,
    title: 'Prototype faster',
    description:
      'Expand use cases, drive product stickiness, and build stronger customer relationships.',
  },
  {
    icon: <FaceIcon />,
    title: 'Build it better',
    description:
      'Expand use cases, drive product stickiness, and build stronger customer relationships.',
  },
  {
    icon: <PersonIcon />,
    title: 'Collab & co-locate',
    description:
      'Expand use cases, drive product stickiness, and build stronger customer relationships.',
  },
]

const partnerLogosData = [
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
  { partner: 'carbon', src: LogoCarbon },
]

const PartnersGrid = () => {
  return (
    <Section className="border-t border-silver-900 bg-black text-white">
      <SectionTitle className="border-silver-500 text-silver-500">
        Partners
      </SectionTitle>

      <div className="grid grid-cols-6">
        <div className="col-span-6 mb-8 md:col-span-4">
          <h2>
            Partner with us and help shape the future of advanced manufacturing
          </h2>
        </div>

        <div className="col-span-6 flex md:col-span-2 md:col-start-5 md:justify-end">
          <Button variant="accent" asChild>
            <Link href="/">
              <Icon
                name="arrow-right"
                className="relative -translate-x-1 transition-all group-hover:translate-x-1"
              />
              Work with us
            </Link>
          </Button>
        </div>
      </div>

      <div className="md:mt-68 mt-32">
        <div className="text-lg text-silver-500">Why partner with us?</div>
        <div className="mt-24 grid grid-cols-4 gap-10">
          {data.map(({ icon, title, description }, idx) => {
            return (
              <div
                className="col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 lg:col-span-1"
                key={idx}
              >
                <div className="mb-16 mt-4 [&>svg]:h-8 [&>svg]:w-8">{icon}</div>
                <h4 className="mb-8 font-display text-3xl font-semibold">
                  {title}
                </h4>
                <p className="text-lg text-white">{description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="gutter-t">
        <Img
          src={IAmGroot}
          alt="I am Groot?"
          placeholder="blur"
          fill={false}
          width={1680}
          height={787}
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
      </div>

      <div className="my-24">
        <h2 className="text-center">Meet our partners</h2>
      </div>

      <div className="gap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {partnerLogosData.map(({ partner, src }, idx) => (
          <figure
            key={idx}
            className="gutter-x flex items-center justify-center rounded border border-silver-900 py-14"
          >
            <Img
              src={src}
              alt={`Proudly partnered with ${partner}`}
              placeholder="blur"
              fill={false}
              width={160}
              height={80}
            />
          </figure>
        ))}
      </div>
    </Section>
  )
}

export default PartnersGrid
