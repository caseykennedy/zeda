import { cn } from 'utils'

import Marquee from 'components/Marquee'
import Section from 'components/ui/Section'

const TextMarquee = ({
  text,
  className,
  speed = 225,
}: {
  text: string
  className?: string
  speed?: number
}) => {
  return (
    <Section
      pt="pt-16"
      pr="pr-0"
      pb="pb-16"
      pl="pl-0"
      maxWidth="w-full"
      className={cn(
        'overflow-hidden bg-background-600 text-background-500',
        className
      )}
    >
      <Marquee pauseOnHover={false} speed={speed}>
        <div className="gutter-x font-display text-[5rem] font-bold leading-snug md:text-[10rem] md:leading-snug">
          {text}
        </div>
      </Marquee>
    </Section>
  )
}

export default TextMarquee
