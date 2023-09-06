import Marquee from 'components/Marquee'
import Section from 'components/ui/Section'

const TextMarquee = ({
  text,
  speed = 225,
}: {
  text: string
  speed?: number
}) => {
  return (
    <Section
      pt="pt-16"
      pr="pr-0"
      pb="pb-16"
      pl="pl-0"
      maxWidth="w-full"
      className="overflow-hidden border-b border-t border-silver-900 bg-black text-silver-900"
    >
      <Marquee pauseOnHover={false} speed={speed}>
        <div className="gutter-x font-display text-6xl font-bold leading-snug md:text-[10rem] md:leading-snug">
          {text}
        </div>
      </Marquee>
    </Section>
  )
}

export default TextMarquee
