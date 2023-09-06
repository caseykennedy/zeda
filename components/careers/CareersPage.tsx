import { LayoutThemes } from 'lib/constants'
import { type JobPost, type Settings } from 'lib/sanity.queries'
import HeroImg from 'public/images/hero-careers.jpg'

import JobList from 'components/JobList'
import Layout from 'components/Layout'
import PageHead from 'components/PageHead'
import { Button, Icon, PageHero, PageTitle } from 'components/ui'

import Benefits from './Benefits'
import WhyUs from './WhyUs'

interface PageProps {
  jobPosts: JobPost[]
  settings: Settings
}

export const CareersPage = ({ jobPosts, settings }: PageProps) => {
  return (
    <>
      <PageHead
        settings={settings}
        page={{
          title: 'Careers',
          description:
            "Zeda is not just a workplace; it's a vibrant community where individuals from diverse walks of life converge to create an unstoppable team.",
        }}
      />
      <Layout theme={LayoutThemes.LIGHT}>
        <PageTitle theme={LayoutThemes.LIGHT}>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="flex-[2]">
              <h1 className="max-w-[24ch]">
                Unleash your potential and join our unstoppable team
              </h1>
            </div>
            <div className="flex w-full flex-1 flex-row justify-end">
              <Button variant="outline" asChild>
                <a href="#open-positions">
                  <Icon
                    name="arrow-right"
                    className="relative -translate-x-1 transition-all group-hover:translate-x-1"
                  />
                  Open positions
                </a>
              </Button>
            </div>
          </div>
        </PageTitle>
        <PageHero image={HeroImg} alt="Work at Zeda, Inc." />
        <WhyUs />
        <Benefits />
        <JobList
          title="Join us on our journey as we drive technological advancements, transform industries, and make a positive impact on the world."
          posts={jobPosts}
        />
      </Layout>
    </>
  )
}

export default CareersPage
