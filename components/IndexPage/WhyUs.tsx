import Image from 'next/image'

import Section from 'components/Section'
import SectionTitle from 'components/SectionTitle'

const WhyUs = () => {
  return (
    <Section
      className="border-b border-t border-black bg-black"
      py="py-0"
      px="px-0"
      maxWidth="w-full"
    >
      <div className="grid h-[600px] grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <figure className="absolute bottom-0 left-0 z-10 h-full w-full">
            <Image
              src="/images/turbine.png"
              alt="Zeda Inc. manufacturing facility"
              fill={true}
              style={{ objectFit: 'cover' }}
              sizes="100%"
              quality={100}
            />
          </figure>
          <figure className="absolute left-0 top-0 h-full w-full">
            <Image
              src="/images/wormhole.png"
              alt="Zeda Inc. manufacturing facility"
              fill={true}
              style={{ objectFit: 'cover' }}
              sizes="100%"
            />
          </figure>
        </div>

        <div className="gutter-x gutter-y relative flex flex-col items-end justify-between border-l border-black bg-violet-500 text-black">
          <div>
            <SectionTitle>Why us?</SectionTitle>
            <h2>
              We accelerate innovative ideas of every level at light speed.
            </h2>
          </div>

          <div className="translate-x-gutter relative flex flex-row flex-nowrap rounded-bl-full rounded-tl-full bg-black p-4 pr-16 sm:pr-24">
            <div className="inline-block">
              <Image
                src="/images/ISO13485.png"
                alt="Zeda Inc. manufacturing facility"
                height={120}
                width={120}
                quality={100}
              />
            </div>
            <div className="inline-block">
              <Image
                src="/images/ISO13485.png"
                alt="Zeda Inc. manufacturing facility"
                height={120}
                width={120}
                quality={100}
              />
            </div>
            <div className="inline-block">
              <Image
                src="/images/ISO13485.png"
                alt="Zeda Inc. manufacturing facility"
                height={120}
                width={120}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default WhyUs
