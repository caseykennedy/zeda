import { urlForImage } from 'lib/sanity.image'
import Link from 'next/link'
import { cn } from 'utils'

import Img from 'components/Img'

interface CoverImageProps {
  title?: string
  slug?: string
  image: any
  priority?: boolean
  className?: string
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority, className } = props
  const image = source?.asset?._ref ? (
    <div
      className={cn(
        'shadow-small',
        {
          'hover:shadow-medium transition-shadow duration-200': slug,
        },
        className
      )}
    >
      <Img
        src={urlForImage(source).width(1920).height(1080).url()}
        alt={`Cover Image for ${title}`}
        blurDataURL={source.metadata.lqip}
        width={1920}
        height={1080}
        sizes="100vw"
        priority={priority}
        className="aspect-video h-auto w-full transition-all duration-500 ease-out group-hover:scale-105"
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <figure className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </figure>
  )
}
