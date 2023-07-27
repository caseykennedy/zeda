import Link from 'next/link'

import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const data = [
  {
    value: '4',
    description: 'Globally operated advanced manufacturing businesses',
  },
  {
    value: '5',
    description: 'Established geographical locations around the world',
  },
  {
    value: '$68m',
    description: 'Total equity and financing capital raise as of 2023',
  },
  {
    value: '150k',
    description: 'Square ft. of advanced manufacturing facilities',
  },
]

const AtGlance = () => (
  <Section>
    <SectionTitle>At a glance</SectionTitle>

    <div className="gap grid grid-cols-6">
      <div className="col-span-6 mb-8 md:col-span-4">
        <h2>
          Our objective is to better lives through investing in cutting-edge
          tech, innovative companies, and groundbreaking ideas.
        </h2>
      </div>

      <div className="col-span-6 flex md:col-span-2 md:col-start-5 md:justify-end">
        <Button variant="primary" asChild>
          <Link href="/">
            <Icon
              name="arrow-right"
              color="white"
              className="relative -translate-x-1 transition-all group-hover:translate-x-1"
            />
            Meet our leadership
          </Link>
        </Button>
      </div>
    </div>

    <div className="mt-32 grid grid-cols-4 gap-8 md:mt-64">
      {[...data].map(({ value, description }, idx) => (
        <div
          className="col-span-4 border-l border-black pl-5 sm:col-span-2 lg:col-span-1"
          key={idx}
        >
          <h3 className="mb-8 font-display text-6xl font-semibold">{value}</h3>
          <p className="text-base">{description}</p>
        </div>
      ))}
    </div>
  </Section>
)

export default AtGlance
