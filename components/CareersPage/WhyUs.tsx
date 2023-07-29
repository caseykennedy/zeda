import * as React from 'react'
import {
  FaceIcon,
  PersonIcon,
  RocketIcon,
  RulerSquareIcon,
} from '@radix-ui/react-icons'

import FeatureGridItem, { type FeatureShape } from 'components/FeatureGridItem'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const data: FeatureShape[] = [
  {
    icon: <RocketIcon />,
    title: 'Purpose',
    desc: 'Stay motivated by solving real problems.',
  },
  {
    icon: <RulerSquareIcon />,
    title: 'Impact',
    desc: 'Identify and tackle problems, take pride in your work, and measure impact.',
  },
  {
    icon: <FaceIcon />,
    title: 'Intent',
    desc: 'Move quickly and simplify.',
  },
  {
    icon: <PersonIcon />,
    title: 'Growth',
    desc: 'Dream big and be open to taking risks.',
  },
]

const WhyUs = () => (
  <Section>
    <SectionTitle>Why work with us?</SectionTitle>

    <div className="grid grid-cols-6 gap-10">
      <div className="col-span-6 mb-8 md:col-span-4">
        <h2>
          Zeda is not just a workplace; it&apos;s a vibrant community where
          individuals from diverse walks of life converge to create an
          unstoppable team.
        </h2>
      </div>

      <div className="col-span-6 flex md:col-span-2 md:col-start-5 md:justify-end">
        <p className="max-w-[40ch] text-lg">
          We foster an environment of inclusivity, collaboration, and mutual
          respect.
        </p>
      </div>
    </div>

    <div className="md:mt-68 mt-32">
      <div className="grid grid-cols-4 gap-10">
        {data.map(({ icon, title, desc }, idx) => (
          <FeatureGridItem icon={icon} title={title} desc={desc} key={idx} />
        ))}
      </div>
    </div>
  </Section>
)

export default WhyUs
