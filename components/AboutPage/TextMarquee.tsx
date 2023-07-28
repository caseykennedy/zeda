import Marquee from 'components/Marquee'
import Section from 'components/ui/Section'

const Hero = () => {
  return (
    <Section
      pt="pt-12"
      pr="pr-0"
      pb="pb-12"
      pl="pl-0"
      fullWidth={true}
      className="overflow-hidden bg-background-600 text-background-500"
    >
      <Marquee pauseOnHover={false} speed={175}>
        <div className="gutter-x font-display text-8xl font-bold leading-snug md:text-[10rem] md:leading-snug">
          We build things better together
        </div>
      </Marquee>
    </Section>
  )
}

export default Hero
