import { ChevronDownIcon } from '@radix-ui/react-icons'
import { type JobPost } from 'lib/sanity.queries'
import Link from 'next/link'

import { PostBody } from 'components/post'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'components/ui/Accordion'
import Button, { buttonVariants } from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import SectionPanel from 'components/ui/SectionPanel'
import SectionTitle from 'components/ui/SectionTitle'

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
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="[&>div]:gap px-0 [&>div]:flex-col [&>div]:items-start [&>div]:md:flex-row [&[data-state=open]>div>div>div>div>svg]:rotate-180">
          <div className="mb-6 flex-1 font-display text-2xl font-semibold tracking-wide md:mb-0">
            {title}
          </div>

          <div className="flex w-full flex-1 items-center justify-between gap-2">
            <div className="text-sm uppercase">{location}</div>
            <div className="text-sm uppercase">{jobType}</div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <a
                  href={applicationURL ?? '#'}
                  target="__blank"
                  rel="nofollow noreferrer"
                >
                  <Icon
                    name="arrow-top-right"
                    className="relative hidden transition-all group-hover:rotate-45 sm:block"
                  />
                  Apply
                </a>
              </Button>
              <div
                className={buttonVariants({
                  variant: 'outline',
                  size: 'icon',
                })}
              >
                <ChevronDownIcon className="h-5 w-5" id="chevron" />
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <PostBody content={description} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const JobPosts = ({
  title,
  hasBtn = false,
  posts,
}: {
  title: string
  hasBtn?: boolean
  posts: JobPost[]
}) => {
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
          date,
          description,
          jobType,
          location,
          slug,
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

export default JobPosts
