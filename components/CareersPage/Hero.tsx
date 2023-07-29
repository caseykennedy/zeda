import HeroImg from 'public/images/hero-careers.jpg'

import Img from 'components/Img'
import Section from 'components/ui/Section'

const Hero = () => {
  return (
    <Section
      pt="pt-0"
      pr="pr-0"
      pb="pb-0"
      pl="pl-0"
      fullWidth={true}
      className="overflow-hidden bg-black text-white"
    >
      <div className="relative h-[400px] max-h-[800px] sm:h-[50vw]">
        <Img
          src={HeroImg}
          alt="About Zeda Inc."
          fill={true}
          priority={true}
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
      </div>
    </Section>
  )
}

export default Hero
