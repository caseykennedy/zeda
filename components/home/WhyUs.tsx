import Image from 'next/image'

import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const valueProps = [
  {
    value: 'Design engineering',
  },
  {
    value: 'Additive manufacturing',
  },
  {
    value: 'Nanotechnology',
  },
  {
    value: 'Complex regulatory',
  },
]

const WhyUs = () => (
  <>
    <Section
      pt="pt-0"
      pr="pr-0"
      pb="pb-0"
      pl="pl-0"
      className="border-b border-t border-black bg-black"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-square min-h-[400px] border-l border-silver-900 md:aspect-auto">
          <figure className="absolute bottom-0 left-0 z-30 flex h-full w-full items-end overflow-hidden md:overflow-visible">
            <Image
              src="/images/turbine-tilt.png"
              alt="Zeda Inc. manufacturing facility"
              height={980}
              width={1149}
              quality={60}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
              className="object-fit-contain xl:scale-115 sm:translate-y-14 md:translate-x-10 md:scale-125 xl:translate-y-32"
            />
          </figure>
          <figure className="absolute left-0 top-0 z-10 h-full w-full">
            <Image
              src="/images/wormhole.png"
              alt="Zeda Inc. manufacturing facility"
              fill={true}
              style={{ objectFit: 'cover' }}
              quality={50}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
            />
          </figure>
        </div>
        <div className="gutter-x gutter-y after:bg-violet-00 relative border-l border-silver-900 bg-violet-500 text-black after:absolute after:-right-[100%] after:top-0 after:h-full after:w-full">
          <SectionTitle>Why us?</SectionTitle>
          <h2 className="mb-16 max-w-[28ch] md:mb-24">
            With our unique value proposition, we accelerate innovative ideas of
            every level at light speed.
          </h2>

          <div className="">
            {valueProps.map(({ value }, idx) => (
              <div
                key={idx}
                className="-mb-[1px] flex items-center rounded-full border border-black px-6 py-5 text-xl font-medium transition-all duration-200 hover:bg-black hover:text-white md:py-7 lg:px-10 lg:text-2xl"
              >
                <span className="mr-3 text-base md:mr-4 lg:mr-6">
                  0{idx + 1}
                </span>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  </>
)

export default WhyUs
