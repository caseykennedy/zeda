import Image from 'next/image'

import Section from 'components/ui/Section'

const Hero = () => {
  return (
    <Section
      pt="pt-0"
      pr="pr-0"
      pb="pb-0"
      pl="pl-0"
      className="overflow-hidden bg-black text-white"
    >
      <div className="gap grid h-full grid-cols-1 content-end md:grid-cols-12">
        <div className="relative col-span-12 block h-[400px] sm:h-[50vw]">
          <Image
            src="/images/about/work-suit.jpg"
            alt="Zeda Inc. manufacturing facility"
            placeholder="blur"
            blurDataURL="/images/about/work-suit.jpg"
            quality={100}
            sizes="100vw"
            fill={true}
            priority={true}
            style={{
              objectFit: 'cover',
              objectPosition: 'left top',
            }}
          />
        </div>

        {/* <div className="hidden lg:flex">menu</div> */}
      </div>
    </Section>
  )
}

export default Hero
