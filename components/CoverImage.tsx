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
    <div className={cn(`h-full overflow-hidden`, className)}>
      <Img
        src={urlForImage(source).width(1920).height(1080).url()}
        alt={`Cover Image for ${title}`}
        blurDataURL={source.metadata.lqip}
        width={1920}
        height={1080}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className="h-full w-full transition-all duration-500 ease-out group-hover:scale-105"
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#fff' }} />
  )

  return (
    <figure>
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
