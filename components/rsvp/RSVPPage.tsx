import { EnvelopeOpenIcon, Pencil2Icon } from '@radix-ui/react-icons'
import type { Leadership, Partner, Settings } from 'lib/sanity.queries'
import DecoratorImg from 'public/images/irridescence.jpg'
import HeroImg from 'public/images/technologies/big-machine-2.jpg'
import { BrandThemes, LayoutThemes } from 'utils/constants'

import Img from 'components/Img'
import Layout from 'components/Layout'
import LeadershipPanel from 'components/LeadershipPanel'
import PageHead from 'components/PageHead'
import PageHero from 'components/PageHero'
import { Heading1FadeIn } from 'components/PageTitle'
import PageTitle from 'components/PageTitle'
import { Button, Section } from 'components/ui'

import Form from './RSVPForm'

const emailAddress = 'info@z8a.com'

const agendaData = [
  {
    time: '9:30AM',
    title: 'Refreshments',
  },
  {
    time: '10:00AM',
    title: 'Keynote',
  },
  {
    time: '10:45AM',
    title: 'Lunch (2h)',
  },
  {
    time: '12:45PM',
    title: 'Guided Tour',
  },
  {
    time: '1:00PM',
    title: 'Drinks',
  },
]

interface Props {
  leadership: Leadership
  settings: Settings
}

export const RSVPPage = ({ leadership, settings }: Props) => {
  return (
    <>
      <PageHead
        settings={settings}
        page={{
          title: 'Contact',
        }}
      />
      <Layout theme={LayoutThemes.LIGHT} brand={BrandThemes.TECHNOLOGIES}>
        <PageTitle theme={LayoutThemes.LIGHT} className="[&>div]:md:mt-48">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="flex-[2]">
              <Heading1FadeIn>
                <h1 className="mb-2">Open House Registration</h1>
                <p className="max-w-[44ch] font-medium text-silver-700">
                  Wednesday, December 6th | 9:30AM-2PM PST
                </p>
              </Heading1FadeIn>
            </div>
            <div className="flex w-full flex-1 flex-row justify-end">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`mailto:${emailAddress}?subject=Zeda, Inc. | Contact request`}
                >
                  <Pencil2Icon className="relative -translate-x-0.5 transition-all group-hover:translate-x-1" />
                  Register
                </a>
              </Button>
            </div>
          </div>
        </PageTitle>

        <section className="overflow-hidden bg-black text-white">
          <div className="relative h-[500px] max-h-[600px] bg-blue-500 sm:h-[50vw]">
            <Img
              src={HeroImg}
              alt="alt"
              fill={true}
              priority={true}
              className="object-cover object-bottom mix-blend-multiply grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </section>

        <Section className="bg-white" pt="pt-0" pr="pr-0" pb="pb-0" pl="pl-0">
          <div className="relative grid grid-cols-1 md:grid-cols-5">
            <div className="gutter flex flex-col justify-between text-black md:col-span-3">
              <h2 className="mb-8">
                Join us at Zeda Technologies for a special Open House Wednesday,
                December 6th where we&apos;ll share our vision for the future of
                Advanced Manufacturing and how we&apos;re building it today.
              </h2>

              <div>
                <h2 className="mb-16">Agenda</h2>
                <ul className="gap flex grid-cols-3 flex-wrap md:grid-cols-4 lg:grid-cols-5">
                  {agendaData.map(({ time, title }, idx) => (
                    <li key={idx} className="border-l border-silver-500 pl-4">
                      <span className="text-sm text-silver-600">{time}</span>
                      <br />
                      <span className="font-medium">{title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="gutter bg-silver-100/60 md:col-span-2">
              <div className="mb-5">
                <EnvelopeOpenIcon className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-2xl md:tracking-wide">Register here</h2>
              <p className="max-w-[42ch]">
                Please register below to attend our Open House. Let us know if
                you have any dietary restrictions.
              </p>
              <div className="mt-10">
                <Form />
              </div>
            </div>
          </div>
        </Section>

        {/* <section className="overflow-hidden bg-black text-white">
          <div className="relative h-[100px] max-h-[100px] bg-blue-600 sm:h-[50vw]">
            <Img
              src={DecoratorImg}
              alt="alt"
              fill={true}
              priority={true}
              className="object-cover object-top mix-blend-hard-light grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </section> */}

        <LeadershipPanel
          people={leadership.people}
          title="Speakers"
          className="dark border-silver-800 bg-silver-900"
        />
      </Layout>
    </>
  )
}

export default RSVPPage
