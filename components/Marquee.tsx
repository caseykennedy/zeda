import FastMarquee from 'react-fast-marquee'

type Props = {
  children: React.ReactNode
  autoFill?: boolean
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  speed?: number
}

const Marquee = ({
  children,
  autoFill = true,
  direction = 'left',
  pauseOnHover = true,
  speed = 40,
}: Props) => {
  const MarqueeProps = {
    direction,
    autoFill,
    pauseOnHover,
    speed,
    gradient: false,
  }
  return <FastMarquee {...MarqueeProps}>{children}</FastMarquee>
}

export default Marquee
