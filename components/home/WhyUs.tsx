import Image from 'next/image'

import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const WhyUs = () => {
  const certBadges = [
    { image: 'badge-as.png', alt: 'as9100d certification' },
    { image: 'badge-itar.png', alt: 'International Traffic in Arms Compliant' },
    { image: 'badge-iso.png', alt: 'Medical Devices Quality Management' },
  ]
  return (
    <Section
      className="border-b border-t border-black bg-black text-white"
      pt="pt-0"
      pr="pr-0"
      pb="pb-0"
      pl="pl-0"
      maxWidth="w-full"
    >
      <div className="relative grid min-h-[500px] grid-cols-1 md:grid-cols-2 lg:min-h-[700px]">
        <div className="relative min-h-[400px]">
          <figure className="absolute bottom-0 left-0 z-30 flex h-full w-full items-end overflow-hidden md:overflow-visible">
            <Image
              src="/images/turbine-tilt.png"
              alt="Zeda Inc. manufacturing facility"
              // fill={true}
              height={980}
              width={1149}
              quality={50}
              className="object-fit-contain xl:scale-115 sm:translate-y-10 md:translate-x-16 md:scale-125 xl:translate-y-32 2xl:translate-y-48"
            />
          </figure>
          <figure className="absolute left-0 top-0 z-10 h-full w-full">
            <Image
              src="/images/wormhole.png"
              alt="Zeda Inc. manufacturing facility"
              fill={true}
              style={{ objectFit: 'cover' }}
              quality={50}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
        </div>

        <div className="gutter-x gutter-y relative flex flex-col items-end justify-between border-l border-black bg-violet-500 text-black">
          <div className="w-full">
            <SectionTitle>Why us?</SectionTitle>
            <h2 className="mb-16 max-w-[24ch]">
              We accelerate innovative ideas of every level at light speed.
            </h2>
          </div>

          <div className="translate-x-gutter relative flex flex-row flex-nowrap gap-2 rounded-bl-full rounded-tl-full bg-black p-4 pr-16 sm:pr-24">
            {certBadges.map(({ image, alt }, i) => (
              <figure
                key={i}
                className="inline-block rounded-full border border-silver-800 bg-silver-900"
              >
                <Image
                  src={`/images/${image}`}
                  alt={alt}
                  height={120}
                  width={120}
                  quality={100}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default WhyUs
