import Link from 'next/link'

import Section from 'components/Section'
import SectionTitle from 'components/SectionTitle'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'

const Careers = () => {
  return (
    <Section>
      <div className="gap grid grid-cols-6">
        <div className="col-span-6 mb-8 md:col-span-4">
          <h2>
            Zeda is a workplace where people from different aspects of life come
            together to create an unstoppable team. With strong values,
            connections, and progressive attitudes, we make sure everyone feels
            their best.
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
              Careers
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-48 md:mt-72">
        <SectionTitle className="mb-0">Open positions</SectionTitle>
        {data.map(
          (
            {
              jobTitle,
              description,
              location,
              type,
              postLink,
              applicationLink,
            },
            idx
          ) => (
            <Link
              href={postLink}
              className="gap gutter-y grid grid-cols-12 border-b border-black"
              key={idx}
            >
              <div className="col-span-12 flex items-center font-display text-2xl font-semibold md:col-span-6">
                {jobTitle}
              </div>

              <div className="col-span-6 flex items-center uppercase md:col-span-3 md:col-start-7">
                {location}
              </div>

              <div className="col-span-6 col-start-7 flex items-center justify-end gap-2 md:col-span-3 md:col-start-10">
                <Button variant="secondary">
                  <Icon
                    name="arrow-top-right"
                    className="relative transition-all group-hover:rotate-45"
                  />
                  Apply
                </Button>
                <Button variant="secondary" size="icon">
                  <Icon name="chevron-up" />
                </Button>
              </div>
            </Link>
          )
        )}
      </div>
    </Section>
  )
}

export default Careers

const data = [
  {
    jobTitle: 'Additive Manufacturing Engineering Manager',
    description: 'description',
    location: 'San Jose, CA',
    type: 'Full-time',
    postLink: '/careers/senior-software-engineer',
    applicationLink: 'https://www.indeed.com',
  },
  {
    jobTitle: 'Medical Device: Senior Validation Engineer',
    description: 'description',
    location: 'Remote',
    type: 'Full-time',
    postLink: '/careers/senior-software-engineer',
    applicationLink: 'https://www.indeed.com',
  },
]
