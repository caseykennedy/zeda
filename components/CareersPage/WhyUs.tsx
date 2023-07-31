import * as React from 'react'
import {
  FaceIcon,
  PersonIcon,
  RocketIcon,
  RulerSquareIcon,
} from '@radix-ui/react-icons'

import FeatureGridItem, { type FeatureShape } from 'components/FeatureGridItem'
import SectionPanel from 'components/ui/SectionPanel'

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
  <SectionPanel
    heading="Why work with us?"
    title="Zeda is not just a workplace; it's a vibrant community where individuals from diverse walks of life converge to create an unstoppable team."
    subTitle="We foster an environment of inclusivity, collaboration, and mutual respect."
  >
    <div className="grid grid-cols-4 gap-10">
      {data.map(({ icon, title, desc }, idx) => (
        <FeatureGridItem icon={icon} title={title} desc={desc} key={idx} />
      ))}
    </div>
  </SectionPanel>
)

export default WhyUs
