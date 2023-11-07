import { ClipboardIcon, Pencil2Icon } from '@radix-ui/react-icons'
import type { Leadership, Partner, Settings } from 'lib/sanity.queries'
import DecoratorImg from 'public/images/irridescence.jpg'
import HeroImg from 'public/images/technologies/big-machine-2.jpg'
import { BrandThemes, LayoutThemes } from 'utils/constants'

import Img from 'components/Img'
import Layout from 'components/Layout'
import LeadershipPanel from 'components/LeadershipPanel'
import PageHead from 'components/PageHead'
import { Heading1FadeIn } from 'components/PageTitle'
import { Button, Section } from 'components/ui'

import PageTitle from './PageTitle'
import Form from './RSVPForm'

const highlightsData = [
  {
    title: 'Exclusive Preview',
    description:
      'Be among the first to experience our groundbreaking digital manufacturing platform.',
  },
  {
    title: 'Keynote Speeches',
    description: 'Gain insights from our leadership and key partners.',
  },
  {
    title: 'Networking Opportunities',
    description: 'Connect with other prominent figures and thought leaders.',
  },
  {
    title: 'Special Showcase',
    description:
      'A unique display of innovative technologies made possible by Additive Manufacturing.',
  },
]

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
          title: 'Open House RSVP',
        }}
      />
      <Layout theme={LayoutThemes.LIGHT} brand={BrandThemes.TECHNOLOGIES}>
        <PageTitle theme={LayoutThemes.LIGHT}>
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="flex-[2]">
              <Heading1FadeIn>
                <h1 className="mb-2">
                  Come see the future of advanced manufacturing
                </h1>
                <p className="font-medium">
                  Wednesday, December 6th | 9:30AM-2PM PST
                </p>
              </Heading1FadeIn>
            </div>
            <div className="flex w-full flex-1 flex-row justify-end lg:hidden">
              <Button variant="outline" asChild>
                <a href="#register">
                  <Pencil2Icon className="relative -translate-x-0.5 transition-all group-hover:translate-x-1" />
                  Register
                </a>
              </Button>
            </div>
          </div>
        </PageTitle>

        <Section className="bg-white" pt="pt-0" pr="pr-0" pb="pb-0" pl="pl-0">
          <div className="relative grid grid-cols-1 lg:grid-cols-5">
            <div className="gutter flex flex-col justify-between text-black md:col-span-3">
              <div className="mb-16 lg:mb-24">
                <h2 className="mb-4">
                  We&apos;re personally inviting you to come see the future of
                  advanced manufacturing, on Wednesday, December 6th.
                </h2>

                <p>
                  Zeda Technologies is poised to introduce its long-term
                  strategy, setting new benchmarks in Additive Manufacturing. We
                  believe our journey is not just about transforming industries
                  such as aerospace & defense, space, and energy, but also
                  forging meaningful connections with leaders, visionaries, and
                  influencers who share our passion and ethos. This event marks
                  the beginning of what we envision to be a legacy of innovation
                  and excellence.
                </p>
              </div>

              <div>
                <h3 className="mb-10">Event Highlights</h3>
                <ul className="mb-20">
                  {highlightsData.map(({ title, description }, idx) => (
                    <li
                      key={idx}
                      className="mb-4 border-l border-silver-500 pl-4"
                    >
                      <span className="text-lg font-medium">{title}</span>
                      <br />
                      <span className="text-silver-700">{description}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-10">Agenda</h3>
                <ul className="gap mb-20 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {agendaData.map(({ time, title }, idx) => (
                    <li key={idx} className="border-l border-silver-500 pl-4">
                      <span className="text-sm text-silver-600">{time}</span>
                      <br />
                      <span className="font-medium">{title}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mb-10">Location</h3>
                <p className="mb-4 border-l border-silver-500 pl-4">
                  1120 Strategic Parkway, Suite 300, Springdale, OH 45246
                </p>
              </div>
            </div>

            <div
              id="register"
              className="gutter bg-silver-100/60 md:col-span-2"
            >
              <div className="mb-5">
                <ClipboardIcon className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-2xl md:tracking-wide">
                Let us know you&apos;re joining in
              </h2>
              <p className="max-w-[42ch]">
                Please register below to attend our event. Let us know if you
                have any dietary restrictions.
              </p>
              <div className="mt-10">
                <Form />
              </div>
            </div>
          </div>
        </Section>

        <LeadershipPanel
          people={leadership.people}
          title="Speakers"
          className="dark border-silver-800 bg-silver-900"
          titleMargin="md:mt-24"
        />

        <section className="overflow-hidden bg-black text-white">
          <div className="relative h-[125px] bg-blue-600">
            <Img
              src={DecoratorImg}
              alt="alt"
              fill={true}
              priority={true}
              className="object-cover object-top mix-blend-hard-light grayscale"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </section>

        {/* <Section className="bg-blue-500 text-white">
          <div className="py-12">
            <h3 className="mb-2 w-full text-center">Zeda Technologies</h3>
            <p className="text-center font-medium">
              1120 Strategic Parkway Suite 300 | Springdale, OH, 45246
            </p>
          </div>
        </Section> */}
      </Layout>
    </>
  )
}

export default RSVPPage
