import Section from 'components/Section'
import SectionTitle from 'components/SectionTitle'

const WhyUs = () => {
  return (
    <Section
      className="border-b border-t border-black bg-black"
      py="py-0"
      px="px-0"
      maxWidth="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div></div>
        <div className="gutter-x gutter-y border-l border-black bg-violet-500 text-black">
          <SectionTitle>Why us?</SectionTitle>
          <h2>We accelerate innovative ideas of every level at light speed.</h2>
        </div>
      </div>
    </Section>
  )
}

export default WhyUs
