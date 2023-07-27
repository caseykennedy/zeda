import Image from 'next/image'

import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const AtGlanceGallery = () => {
  return (
    <Section className="border-t border-silver-900 bg-black text-white">
      <SectionTitle className="border-silver-500 text-silver-500">
        At a glance
      </SectionTitle>

      <div className="grid grid-cols-6">
        <div className="col-span-6 mb-8 md:col-span-4">
          <h2>
            We build it better
            <br />
            together
          </h2>
        </div>

        <div className="col-span-6 flex md:col-span-2 md:col-start-5 md:justify-end">
          <p className="max-w-[40ch] text-lg text-silver-500">
            Zeda&apos;s objective is to better lives by investing in
            cutting-edge tech, innovative companies, and groundbreaking ideas.
          </p>
        </div>
      </div>

      <div className="mt-32 grid grid-cols-4 gap-8 md:mt-64">
        {[...data].map(({ value, description }, idx) => (
          <div
            className="col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 lg:col-span-1"
            key={idx}
          >
            <h3 className="mb-8 font-display text-6xl font-medium">{value}</h3>
            <p className="text-base">{description}</p>
          </div>
        ))}
      </div>

      <div className="gutter-t grid grid-cols-3 grid-rows-3 gap-4">
        <figure className="relative col-span-2 row-span-3 overflow-hidden rounded">
          <Image
            src="/images/about/work-mask.jpg"
            alt="Zeda Inc. manufacturing facility"
            placeholder="blur"
            blurDataURL="/images/about/work-mask.jpg"
            quality={100}
            fill={false}
            width={1440}
            height={658}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              transform: 'scaleX(-1)',
            }}
          />
        </figure>
        <figure className="relative col-span-1 row-span-1 overflow-hidden rounded">
          <Image
            src="/images/about/hand-turbine.jpg"
            alt="Zeda Inc. manufacturing facility"
            placeholder="blur"
            blurDataURL="/images/about/hand-turbine.jpg"
            quality={100}
            fill={true}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
            className="mix-blend-screen"
          />
        </figure>
        <figure className="relative col-span-1 row-span-2 overflow-hidden rounded">
          <Image
            src="/images/about/work-group.jpg"
            alt="Zeda Inc. manufacturing facility"
            placeholder="blur"
            blurDataURL="/images/about/work-group.jpg"
            quality={100}
            fill={true}
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
        </figure>
      </div>
    </Section>
  )
}

export default AtGlanceGallery

const data = [
  {
    value: '4',
    description: 'Globally operated advanced manufacturing businesses',
  },
  {
    value: '5',
    description: 'Established geographical locations around the world',
  },
  {
    value: '$68m',
    description: 'Total equity and financing capital raise as of 2023',
  },
  {
    value: '150k',
    description: 'Square ft. of advanced manufacturing facilities',
  },
]
