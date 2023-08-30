import type { StaticImageData } from 'next/image'
import { cn } from 'utils'

import Img from 'components/Img'

interface Props {
  image: StaticImageData
  alt: string
  className?: string
}

const PageHero = ({ image, alt, className }: Props) => {
  return (
    <section className="overflow-hidden bg-black text-white">
      <div className="relative h-[400px] max-h-[800px] sm:h-[50vw]">
        <Img
          src={image}
          alt={alt}
          fill={true}
          priority={true}
          className={cn(`object-cover object-top`, className)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 80vw"
        />
      </div>
    </section>
  )
}

export default PageHero
