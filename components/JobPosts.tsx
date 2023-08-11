import { ChevronDownIcon } from '@radix-ui/react-icons'
import { type JobPost } from 'lib/sanity.queries'
import Link from 'next/link'

import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import SectionPanel from 'components/ui/SectionPanel'
import SectionTitle from 'components/ui/SectionTitle'

const Careers = ({
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
      <SectionTitle className="mb-0">Open positions</SectionTitle>
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
          console.log(applicationURL)
          return (
            <div
              className="gap gutter-y grid grid-cols-12 border-b border-black"
              key={_id}
            >
              <div className="col-span-12 flex items-center font-display text-2xl font-semibold tracking-wide md:col-span-6">
                {title}
              </div>

              <div className="col-span-6 flex items-center uppercase md:col-span-3 md:col-start-7">
                {location}
              </div>

              <div className="col-span-6 col-start-7 flex items-center justify-end gap-2 md:col-span-3 md:col-start-10">
                <Button variant="outline" asChild>
                  <Link
                    href={applicationURL ?? '#'}
                    target="__blank"
                    rel="nofollow noreferrer"
                  >
                    <Icon
                      name="arrow-top-right"
                      className="relative transition-all group-hover:rotate-45"
                    />
                    Apply
                  </Link>
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronDownIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          )
        }
      )}
    </SectionPanel>
  )
}

export default Careers
