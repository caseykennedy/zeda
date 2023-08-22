import Link from 'next/link'

import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import Section from 'components/ui/Section'
import SectionPanel from 'components/ui/SectionPanel'
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
    value: '46x',
    description: 'Projected growth between 2022 — 2027',
  },
]

const AtGlance = () => (
  <SectionPanel
    heading="At a glance"
    title="Our objective is to better lives through investing in cutting-edge tech, innovative companies, and groundbreaking ideas."
    btn={
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
    }
  >
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
  </SectionPanel>
)

export default AtGlance
