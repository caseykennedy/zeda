import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { urlForImage } from 'lib/sanity.image'
import type { Person } from 'lib/sanity.queries'
import Link from 'next/link'

import Img from 'components/Img'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from 'components/ui/Dialog'

interface Props extends Partial<Person> {
  children: React.ReactNode
}

const TeamBio = ({
  _id,
  bio,
  linkedinURL,
  name,
  picture,
  position,
  children,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-h-[100svh] max-w-[900px] overflow-hidden overflow-y-auto rounded border-black bg-black text-white">
        <DialogHeader>
          <div className="flex flex-col bg-violet-500 sm:flex-row">
            <figure className="relative h-full bg-black p-14 sm:max-w-xs sm:p-0">
              <Img
                src={urlForImage(picture).url()}
                alt="Zeda Inc. manufacturing facility"
                blurDataURL={picture?.metadata.lqip}
                width={693}
                height={800}
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 16vw"
                className="rounded sm:rounded-none"
              />
            </figure>
            <div className="gutter flex flex-1 flex-col justify-end">
              <div className="gutter-b sm:mt-10 md:mt-16">
                <h4 className="mb-2 flex-[1] text-5xl">{name}</h4>
                <p className="text-sm font-medium uppercase">{position}</p>
              </div>
              {linkedinURL && (
                <p>
                  <Link
                    href={linkedinURL}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="inline-block text-white transition-colors duration-200 hover:text-black"
                  >
                    <LinkedInLogoIcon className="h-6 w-6" />
                  </Link>
                </p>
              )}
            </div>
          </div>
        </DialogHeader>
        <div className="flex flex-col">
          <div className="gutter">
            <p className="text-lg leading-relaxed text-silver-100 md:text-xl md:leading-relaxed">
              {bio}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TeamBio
