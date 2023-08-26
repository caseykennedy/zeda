import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { urlForImage } from 'lib/sanity.image'
import type { Person } from 'lib/sanity.queries'
import Link from 'next/link'

import Img from 'components/Img'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
  seats,
  children,
}: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-h-screen max-w-[900px] overflow-hidden overflow-y-auto rounded border-black bg-black text-white">
        <DialogHeader>
          <div className="flex flex-col bg-violet-500 sm:flex-row">
            <figure className="relative block aspect-square h-[300px]">
              <Img
                src={urlForImage(picture).width(300).height(300).url()}
                alt="Zeda Inc. manufacturing facility"
                blurDataURL={picture?.metadata.lqip}
                fill={true}
                style={{ objectFit: 'cover' }}
                className="overflow-hidden"
              />
            </figure>
            <div className="gutter flex flex-1 flex-col justify-end border-l border-black">
              <div className="gutter-b mt-10 md:mt-16">
                <h4 className="mb-2 flex-[1] text-5xl">{name}</h4>
                <p className="text-sm font-medium uppercase">{position}</p>
              </div>
              {linkedinURL && (
                <p>
                  {' '}
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
