import * as React from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import ImgServices from 'public/images/technologies/mfg-services.jpg'

import { SectionSplit } from 'components/ui'

const services = [
  {
    title: 'Heat treating',
  },
  {
    title: 'AFM',
  },
  {
    title: 'Surface finishing',
  },
  {
    title: 'X-ray',
  },
  {
    title: 'CT scan',
  },
  {
    title: 'FPI',
  },
  {
    title: 'Flow testing',
  },
]

const Services = () => (
  <SectionSplit
    title="Services"
    description="Our aim is to enhance project efficiency and success by leveraging our
    extensive experience and strong sourcing relationships to manage all
    project steps alongside our internal capabilities."
    image={ImgServices}
    alt="Zeda Inc. manufacturing services"
    id="services"
  >
    <ul className="flex flex-col">
      {services.map(({ title }, idx) => (
        <li
          className="flex items-center gap-4 border-t border-silver-800 py-4 font-display text-xl font-semibold last:pb-0"
          key={idx}
        >
          <span>
            <ArrowRightIcon className="h-5 w-5 shrink-0 text-blue-500" />
          </span>
          {title}
        </li>
      ))}
    </ul>
  </SectionSplit>
)

export default Services
