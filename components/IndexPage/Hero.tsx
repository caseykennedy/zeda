import Image from 'next/image'

import Section from 'components/Section'
import TextFader from 'components/TextFader'

const Hero = () => {
  return (
    <Section className="dark h-[100vh] max-h-[1080px] overflow-hidden bg-black text-white">
      <div className="gap grid h-full grid-cols-1 content-end md:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-end">
          <p className=" max-w-[29ch] border-l border-white pl-6">
            <strong>Building together</strong>
            <br />
            We use technology to better lives—built using trust.
          </p>
        </div>
        <div className="relative z-10">
          <h1 className="dark:text-white">
            Building <TextFader />
            <br />
            together.
          </h1>
        </div>
      </div>

      <figure className="absolute left-0 top-0 z-0 h-full w-full">
        <Image
          src="/images/hero-test.png"
          alt="Zeda Inc. manufacturing facility"
          fill={true}
          style={{ objectFit: 'cover' }}
          sizes="100%"
        />
      </figure>
    </Section>
  )
}

export default Hero
