import * as React from 'react'
import {
  FaceIcon,
  PersonIcon,
  RocketIcon,
  RulerSquareIcon,
} from '@radix-ui/react-icons'
import goldenGateBridgeImg from 'public/images/about/goldengate-bridge.jpg'
import workBalanceImg from 'public/images/about/work-life-balance.jpg'

import Img from 'components/Img'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

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
  },
  {
    city: 'Cincinnati, OH',
  },
  {
    city: 'Reno, NV',
  },
  {
    city: 'Singapore',
  },
]

const Benefits = () => (
  <Section
    pt="pt-0"
    pr="pr-0"
    pb="pb-0"
    pl="pl-0"
    className="bg-black text-white"
  >
    <div className="relative grid grid-cols-1 lg:grid-cols-2">
      <div className="gutter flex flex-col justify-between bg-black">
        <h2 className="max-w-[20ch]">
          Work + life—helping you strike a balance
        </h2>
        <div className="mt-32 md:mt-64">
          <div className="grid grid-cols-2 gap-10">
            {benefitsData.map(({ title, desc }, idx) => (
              <div
                className="group col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 md:col-span-1"
                key={idx}
              >
                <h3 className="mb-8 font-display text-xl font-semibold md:text-2xl">
                  {title}
                </h3>
                <p className="text-silver-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative aspect-square min-h-[400px] bg-violet-500 sm:aspect-video lg:aspect-square">
        <Img
          src={workBalanceImg}
          alt="Zeda Inc. manufacturing facility"
          placeholder="blur"
          fill={true}
          // width={980}
          // height={886}
          style={{
            objectFit: 'cover',
            objectPosition: 'top right',
          }}
        />
      </div>
    </div>

    <div className="relative grid grid-cols-1 lg:grid-cols-2">
      <div className="relative order-last aspect-square bg-violet-500 sm:aspect-video lg:order-first lg:aspect-square">
        <Img
          src={goldenGateBridgeImg}
          alt="San Francisco Golden Gate Bridge"
          placeholder="blur"
          fill={true}
          // width={980}
          // height={886}
          style={{
            objectFit: 'cover',
            objectPosition: 'top right',
          }}
        />
      </div>

      <div className="gutter flex flex-col justify-between bg-black">
        <h2 className="max-w-[20ch]">Where we work</h2>
        <div className="mt-32 md:mt-64">
          <div className="flex flex-col">
            {locationsData.map(({ city }, idx) => (
              <div
                className="border-t border-silver-800 py-6 last:pb-0"
                key={idx}
              >
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {city}
                </h3>
                {/* <p>{desc}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default Benefits
