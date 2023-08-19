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
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import SectionPanel from 'components/ui/SectionPanel'
import SectionTitle from 'components/ui/SectionTitle'

const Collapse = ({
  applicationURL,
  description,
  location,
  title,
}: Pick<JobPost, 'applicationURL' | 'location' | 'description' | 'title'>) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-0 [&[data-state=open]>div>div>button>svg]:rotate-180">
          <div className="col-span-12 flex items-center font-display text-2xl font-semibold tracking-wide md:col-span-6">
            {title}
          </div>

          <div className="col-span-6 flex items-center uppercase md:col-span-3 md:col-start-7">
            {location}
          </div>

          <div className="col-span-6 col-start-7 flex items-center justify-end gap-2 md:col-span-3 md:col-start-10">
            <Button variant="outline" asChild>
              <a
                href={applicationURL ?? '#'}
                target="__blank"
                rel="nofollow noreferrer"
              >
                <Icon
                  name="arrow-top-right"
                  className="relative transition-all group-hover:rotate-45"
                />
                Apply
              </a>
            </Button>
            {/* <Button variant="outline" size="icon">
              <ChevronDownIcon className="h-5 w-5" id="chevron" />
            </Button> */}
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
          return <Collapse key={_id} description={description} title={title} />
        }
      )}
    </SectionPanel>
  )
}

export default JobPosts
