import { PlusIcon } from '@radix-ui/react-icons'
import { type JobPost } from 'lib/sanity.queries'
import Link from 'next/link'

import { Icon, Pill } from 'components/ui'
import Button, { buttonVariants } from 'components/ui/Button'
import SectionPanel from 'components/ui/SectionPanel'
import SectionTitle from 'components/ui/SectionTitle'

import JobDialog from './JobDialog'

const Collapse = ({
  applicationURL,
  description,
  jobType,
  location,
  title,
  travel,
}: Pick<
  JobPost,
  'applicationURL' | 'description' | 'jobType' | 'location' | 'title' | 'travel'
>) => {
  return (
    <div className="gap justiy-between gutter-y flex flex-col border-t border-black last:pb-0 md:flex-row">
      <div className="mb-6 flex-1 font-display text-2xl font-semibold tracking-wide md:mb-0">
        {title}
      </div>

      <div className="flex w-full flex-1 items-center justify-between gap-2">
        <div className="flex w-full flex-row flex-wrap gap-2">
          <div className="flex-[1]">
            <Pill variant="primary" size="lg">
              {location}
            </Pill>
          </div>
          <div className="hidden flex-[1] sm:block">
            <Pill variant="ghost" size="lg" className="border-black text-black">
              {jobType}
            </Pill>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <a
              href={applicationURL ?? '#'}
              target="__blank"
              rel="nofollow noreferrer"
              aria-label="Apply for the job"
            >
              <Icon
                name="arrow-top-right"
                className="relative hidden transition-all group-hover:rotate-45 sm:block"
              />
              Apply
            </a>
          </Button>
          <JobDialog
            applicationURL={applicationURL}
            description={description}
            jobType={jobType}
            location={location}
            title={title}
            travel={travel}
          >
            <div
              className={buttonVariants({
                variant: 'outline',
                size: 'icon',
              })}
              role="button"
              aria-label="Read the job description"
            >
              <PlusIcon className="h-5 w-5" />
            </div>
          </JobDialog>
        </div>
      </div>
    </div>
  )
}

const JobList = ({
  title,
  hasBtn = false,
  posts,
}: {
  title: string
  hasBtn?: boolean
  posts: JobPost[]
}): JSX.Element => {
  return (
    <SectionPanel
      id="open-positions"
      title={title}
      btn={
        hasBtn ? (
          <Button variant="primary" asChild>
            <Link href="/careers">
              <Icon
                name="arrow-right"
                color="white"
                className="relative -translate-x-1 transition-all group-hover:translate-x-1"
              />
              Work with us
            </Link>
          </Button>
        ) : undefined
      }
    >
      <SectionTitle className="mb-0 border-b-0">Open positions</SectionTitle>
      {posts.map(
        ({
          _id,
          applicationURL,
          description,
          jobType,
          location,
          title,
          travel,
        }) => {
          return (
            <Collapse
              key={_id}
              applicationURL={applicationURL}
              description={description}
              jobType={jobType}
              location={location}
              title={title}
              travel={travel}
            />
          )
        }
      )}
    </SectionPanel>
  )
}

export default JobList
