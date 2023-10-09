import * as React from 'react'
import {
  FaceIcon,
  PersonIcon,
  RocketIcon,
  RulerSquareIcon,
} from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import { urlForImage } from 'lib/sanity.image'
import { type Partner } from 'lib/sanity.queries'
import Link from 'next/link'
import IAmGroot from 'public/images/groot.jpg'
import { polyVariant, staggerItems, viewport } from 'utils/variants'

import FeatureGridItem, { type FeatureShape } from 'components/FeatureGridItem'
import Img from 'components/Img'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const data: FeatureShape[] = [
  {
    icon: <RocketIcon />,
    title: 'Elevate your platform',
    desc: 'We embrace a culture of innovation, constantly pushing boundaries and seeking new solutions to complex challenges.',
  },
  {
    icon: <RulerSquareIcon />,
    title: 'Prototype faster',
    desc: 'With our state-of-the-art equipment and a multidisciplinary team of skilled engineers, we accelerate the realization of innovative ideas at every level.',
  },
  {
    icon: <FaceIcon />,
    title: 'Build it better',
    desc: 'We strive for excellence in everything we do, delivering high-quality results and exceeding expectations.',
  },
  {
    icon: <PersonIcon />,
    title: 'Collab & co-locate',
    desc: 'We believe in the power of collaboration, fostering strong partnerships and teamwork to achieve collective success.',
  },
]

const PartnersGrid = ({ partners }: { partners: Partner[] }) => (
  <Section
    className="dark border-t border-silver-900 bg-black text-white"
    id="partners"
  >
    <SectionTitle dark>Partners</SectionTitle>

    <div className="grid grid-cols-6">
      <div className="col-span-6 mb-8 md:col-span-4">
        <h2 className="max-w-[32ch]">
          Partner with us and help shape the future of advanced manufacturing
        </h2>
      </div>

      <div className="col-span-6 flex md:col-span-2 md:col-start-5 md:justify-end">
        <Button variant="accent" asChild>
          <Link href="/contact">
            <Icon
              name="arrow-right"
              className="relative -translate-x-1 transition-all group-hover:translate-x-1"
            />
            Work with us
          </Link>
        </Button>
      </div>
    </div>

    <div className="mt-32">
      <div className="text-lg text-silver-500">Why partner with us?</div>
      <div className="mt-24 grid grid-cols-4 gap-16 md:gap-10">
        {data.map(({ icon, title, desc }, idx) => (
          <FeatureGridItem icon={icon} title={title} desc={desc} key={idx} />
        ))}
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
        className="rounded"
      />
    </div>

    <div className="my-24">
      <h2 className="text-center">Meet our partners</h2>
    </div>

    <motion.div
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4"
    >
      {partners.map(({ name, logo }, idx) => (
        <motion.figure
          key={idx}
          variants={polyVariant}
          className="gutter-x gutter-y relative flex items-center justify-center py-8 before:absolute before:-left-1 before:bottom-0 before:top-0 before:w-[1px] before:bg-silver-900"
        >
          <Img
            src={urlForImage(logo).width(180).height(80).url()}
            alt={`Proudly partnered with ${name}`}
            blurDataURL={logo.metadata.lqip}
            fill={false}
            width={180}
            height={80}
          />
        </motion.figure>
      ))}
    </motion.div>
  </Section>
)

export default PartnersGrid
