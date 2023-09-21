import type { JobPost } from 'lib/sanity.queries'

import { PostBody } from 'components/post'
import { Button, Icon, Pill } from 'components/ui'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/ui/Dialog'

interface Props extends Partial<JobPost> {
  children: React.ReactNode
}

const JobDialog = ({
  applicationURL,
  description,
  jobType,
  location,
  title,
  travel,
  children,
}: Props) => {
  const metaData = [location, jobType, travel]
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-h-[100svh] max-w-[780px] overflow-hidden overflow-y-auto rounded border border-black border-silver-900 bg-black text-white md:max-h-[90svh]">
        <DialogHeader>
          <div className="border-b border-silver-900 p-6 lg:p-8">
            <DialogTitle className="max-w-[26ch] text-4xl leading-snug tracking-wide">
              {title}
            </DialogTitle>
          </div>
          <div className="flex w-full flex-wrap gap-2 border-b border-silver-900 bg-black p-6 text-sm uppercase lg:p-8">
            {metaData.map((value, i) => {
              return (
                value?.length && (
                  <Pill key={i} variant="ghost" size="lg">
                    {value}
                  </Pill>
                )
              )
            })}
          </div>
        </DialogHeader>
        <div className="bg-silver-950 p-6 text-silver-100 lg:p-8">
          <PostBody content={description} />
        </div>
        <div className="sticky bottom-0 bg-silver-950 px-6 pb-6">
          <div className="gap flex items-center justify-between rounded-lg border border-black bg-violet-500 px-4 py-4">
            <div>
              <p className="text-lg font-medium leading-snug md:text-xl">
                Join us and let&apos;s change the world together.
              </p>
            </div>

            <Button variant="outline" className="text-black" asChild>
              <a
                href={applicationURL && '#'}
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default JobDialog
