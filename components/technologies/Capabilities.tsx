import * as React from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import goldenGateBridgeImg from 'public/images/about/goldengate-bridge.jpg'
import imgCapabilities from 'public/images/technologies/mfg-capabilities.jpg'
import mfgMaskImg from 'public/images/technologies/mfg-mask.jpg'

import Img from 'components/Img'
import { Pill } from 'components/ui'
import Section from 'components/ui/Section'

const capabilities = [
  {
    title: 'Advanced CAM programming',
  },
  {
    title: 'In-house full 5-axis advanced CNC machining',
  },
  {
    title: 'Metal additive manufacturing',
  },
  {
    title: 'Polymer 3D printing',
  },
  {
    title: 'Dimensional inspection, including CMM measurement',
  },
  {
    title: 'Dimensional inspection, including CMM measurement',
  },
  {
    title: 'EDM Wire',
  },
]

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

const Benefits = () => (
  <Section
    pt="pt-0"
    pr="pr-0"
    pb="pb-0"
    pl="pl-0"
    className="bg-black text-white"
    id="capabilities"
  >
    <div className="relative grid grid-cols-1 lg:grid-cols-2">
      <div className="gutter flex flex-col justify-between bg-black">
        <h2 className="mb-4 max-w-[20ch]">Capabilities</h2>
        <p className="text-silver-400">
          A robust manufacturing capability is vital for a strong economy and
          national security. We blend traditional methods like CNC machining and
          EDM with cutting-edge technologies like additive manufacturing, PECM,
          and automation.
        </p>
        <div className="mt-16 md:mt-32">
          <ul className="flex flex-col">
            {capabilities.map(({ title }, idx) => (
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
        </div>
      </div>
      <div className="relative h-full min-h-[600px] bg-blue-500">
        <Img
          src={mfgMaskImg}
          alt="Zeda Inc. manufacturing facility"
          placeholder="blur"
          fill={true}
          // width={980}
          // height={886}
          className="aspect-square object-cover object-right-top sm:aspect-video lg:aspect-square"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>

    <div className="relative grid grid-cols-1 lg:grid-cols-2">
      <div className="relative order-last h-full min-h-[600px] bg-blue-500 lg:order-first">
        <Img
          src={imgCapabilities}
          alt="San Francisco Golden Gate Bridge"
          placeholder="blur"
          fill={true}
          // width={980}
          // height={886}
          className="aspect-square object-cover object-right-top sm:aspect-video lg:aspect-square"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="gutter flex flex-col justify-between bg-black">
        <h2 className="mb-4 max-w-[20ch]">Services</h2>
        <p className="text-silver-400">
          Our aim is to enhance project efficiency and success by leveraging our
          extensive experience and strong sourcing relationships to manage all
          project steps alongside our internal capabilities.
        </p>
        <div className="mt-16 md:mt-32">
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
        </div>
      </div>
    </div>
  </Section>
)

export default Benefits
