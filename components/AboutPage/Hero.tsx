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
            fill={true}
            style={{ objectFit: 'cover', objectPosition: 'left top' }}
            // width={1920}
            // height={986}
            quality={100}
          />
        </div>

        {/* <div className="hidden lg:flex">menu</div> */}
      </div>
    </Section>
  )
}

export default Hero
