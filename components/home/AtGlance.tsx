import Link from 'next/link'

import Countup from 'components/Countup'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import SectionPanel from 'components/ui/SectionPanel'

const stats = [
  {
    value: 7,
    suffix: '+',
    description: 'Strategic partners with a $340B combined market cap',
  },
  {
    value: 6,
    description: 'Years in business',
  },
  {
    value: 3,
    description: 'Acquisitions',
  },
  {
    value: 1,
    description: 'Mission: to better lives by building it better together',
  },
]

const AtGlance = () => (
  <SectionPanel
    heading="At a glance"
    title="Our objective is to better lives through investing in cutting-edge tech, innovative companies, and groundbreaking ideas."
    btn={
      <Button variant="primary" asChild>
        <Link href="/about#leadership">
          <Icon
            name="arrow-right"
            className="relative -translate-x-1 transition-all group-hover:translate-x-1"
          />
          Meet our leadership
        </Link>
      </Button>
    }
  >
    <div className="mt-32 grid grid-cols-4 gap-16 md:mt-64 md:gap-10">
      {stats.map(({ value, description, suffix }, idx) => (
        <div
          className="col-span-4 border-l border-black pl-5 sm:col-span-2 lg:col-span-1"
          key={idx}
        >
          <h3 className="mb-8 font-display text-7xl font-semibold">
            <Countup end={value} suffix={suffix} />
          </h3>
          <p className="text-lg">{description}</p>
        </div>
      ))}
    </div>
  </SectionPanel>
)

export default AtGlance
