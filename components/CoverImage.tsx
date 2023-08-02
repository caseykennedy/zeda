import clsx from 'clsx'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

import Img from 'components/Img'

interface CoverImageProps {
  title?: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props
  const image = source?.asset?._ref ? (
    <div
      // className={cn('shadow-small', {
      //   'transition-shadow duration-200 hover:shadow-medium': slug,
      // })}
      className={clsx('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <Img
        src={urlForImage(source).width(1920).height(1080).url()}
        alt={`Cover Image for ${title}`}
        blurDataURL={source.metadata.lqip}
        width={1920}
        height={1080}
        sizes="100vw"
        priority={priority}
        className="aspect-video h-auto w-full"
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
