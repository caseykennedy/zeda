import CountUp from 'react-countup'

interface Props {
  start?: number
  end: number
  prefix?: string
  suffix?: string
}

const Countup = ({ start = 0, end = 99, prefix, suffix }: Props) => {
  return (
    <CountUp
      start={start}
      end={end}
      prefix={prefix}
      suffix={suffix}
      delay={0}
      duration={3}
      decimal=","
      onEnd={() => console.log('Ended! 👏')}
      onStart={() => console.log('Started! 💨')}
      enableScrollSpy={true}
      scrollSpyOnce={true}
    >
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  )
}

export default Countup
