import * as React from 'react'
import goldenGateBridgeImg from 'public/images/about/goldengate-bridge.jpg'
import workBalanceImg from 'public/images/about/work-life-balance.jpg'

import { Pill, SectionSplit } from 'components/ui'

const benefitsData = [
  {
    title: 'Healthcare',
    desc: 'We take care of your premiums for medical, dental, and vision.',
  },
  {
    title: 'Unlimited PTO',
    desc: 'We have an unlimited PTO policy and encourage you actually to use it.',
  },
  {
    title: 'Ownership',
    desc: 'We offer a stake in the company to every full-time employee through stock options.',
  },
  {
    title: '401 (k)',
    desc: 'We make it easy to save money for retirement.',
  },
]

const locationsData = [
  {
    city: 'Bay Area, CA',
    type: 'headquarters',
  },
  {
    city: 'Cincinnati, OH',
    type: 'manufacturing',
  },
  {
    city: 'Reno, NV',
    type: 'medical',
  },
  {
    city: 'Singapore',
    type: 'engineering',
  },
]

const Benefits = () => (
  <>
    <SectionSplit
      title="Work + life—helping you strike a balance"
      image={workBalanceImg}
      alt="Zeda Inc., team members working together"
      id="capabilities"
      reverse={true}
    >
      <div className="grid grid-cols-2 gap-10">
        {benefitsData.map(({ title, desc }, idx) => (
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

    <SectionSplit
      title="Where we work"
      image={goldenGateBridgeImg}
      alt="San Francisco Golden Gate Bridge"
      id="capabilities"
    >
      <ul className="flex flex-col">
        {locationsData.map(({ city, type }, idx) => (
          <div
            className="flex items-center justify-between border-t border-silver-900 py-5 font-display text-xl font-semibold md:py-6 md:text-2xl"
            key={idx}
          >
            {city}
            <Pill variant="tertiary">{type}</Pill>
          </div>
        ))}
      </ul>
    </SectionSplit>
  </>
)

export default Benefits
