import * as React from 'react'
import ImgService from 'public/images/technologies/mfg-jumpsuit.jpg'

import { SectionSplit } from 'components/ui'

const data = [
  {
    title: 'Healthcare',
    desc: 'We take care of your premiums for medical, dental, and vision.',
  },
  {
    title: 'Healthcare',
    desc: 'We take care of your premiums for medical, dental, and vision.',
  },
  {
    title: 'Healthcare',
    desc: 'We take care of your premiums for medical, dental, and vision.',
  },
  {
    title: 'Healthcare',
    desc: 'We take care of your premiums for medical, dental, and vision.',
  },
]

const Services = () => (
  <SectionSplit
    title="Title"
    description="Description here."
    image={ImgService}
    alt="Zeda Inc. manufacturing services"
    id="services"
  >
    <div className="grid grid-cols-2 gap-10">
      {data.map(({ title, desc }, idx) => (
        <div
          className="group col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 md:col-span-1"
          key={idx}
        >
          <h3 className="mb-4 font-display text-xl font-semibold md:text-2xl">
            {title}
          </h3>
          <p className="text-silver-500">{desc}</p>
        </div>
      ))}
    </div>
  </SectionSplit>
)

export default Services
