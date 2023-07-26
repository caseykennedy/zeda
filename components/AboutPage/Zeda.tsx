import Section from 'components/ui/Section'

import AtGlance from './AtGlance'
import Efficiency from './Efficiency'
import Ideas from './Ideas'

const Intro = () => (
  <Section>
    <h2 className="mx-auto my-24 max-w-[48ch] text-center text-3xl md:my-32 md:text-5xl md:leading-tight">
      Rapid prototyping is more than having fast equipment. You need talented
      engineers and a robust design hardware and software ecosystem. Zeda offers
      all of this.
    </h2>
  </Section>
)

export const Zeda = () => (
  <>
    <Intro />
    <Ideas />
    <Efficiency />
    <AtGlance />
  </>
)

export default Zeda
