import { type JobPost, type Settings } from 'lib/sanity.queries'

import IndexPageHead from 'components/IndexPage/IndexPageHead'
import JobPosts from 'components/JobPosts'
import Layout from 'components/Layout'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import PageTitle from 'components/ui/PageTitle'

import Benefits from './Benefits'
import Hero from './Hero'
import WhyUs from './WhyUs'

interface PageProps {
  jobPosts: JobPost[]
  settings: Settings
}

export const CareersPage = ({ jobPosts, settings }: PageProps) => {
  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout>
        <PageTitle>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="flex-[2]">
              <h1 className="max-w-[24ch]">
                Unleash your potential and join our unstoppable team
              </h1>
            </div>
            <div className="flex w-full flex-1 flex-row justify-end">
              <Button variant="accent">
                <Icon
                  name="arrow-right"
                  className="relative -translate-x-1 transition-all group-hover:translate-x-1"
                />
                Open positions
              </Button>
            </div>
          </div>
        </PageTitle>
        <Hero />
        <WhyUs />
        <Benefits />
        <JobPosts
          title="Join us on our journey as we drive technological advancements, transform industries, and make a positive impact on the world."
          posts={jobPosts}
        />
      </Layout>
    </>
  )
}

export default CareersPage
