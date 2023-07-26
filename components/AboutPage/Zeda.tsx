import Section from 'components/ui/Section'

import Efficiency from './Efficiency'
import Ideas from './Ideas'

const Intro = () => (
  <Section>
    <h2 className="mx-auto my-32 max-w-[50ch] text-center">
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
  </>
)

export default Zeda
