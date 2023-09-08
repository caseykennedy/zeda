import type { StaticImageData } from 'next/image'
import { cn } from 'utils'
import { type LayoutTheme, LayoutThemes } from 'utils/constants'

import Img from 'components/Img'
import { Section } from 'components/ui'

interface Props {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  id?: string
  image: StaticImageData
  alt: string
  theme?: LayoutTheme
  reverse?: boolean
}

const SectionSplit = ({
  title,
  description,
  children,
  className,
  id,
  image,
  alt,
  theme = LayoutThemes.DARK,
  reverse,
}: Props) => {
  return (
    <Section
      pt="pt-0"
      pr="pr-0"
      pb="pb-0"
      pl="pl-0"
      className={cn(
        theme === LayoutThemes.DARK
          ? `bg-black text-white`
          : `bg-background text-black`,
        className
      )}
      id={id}
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        <div className={cn(`relative h-full min-h-[475px] bg-blue-500`)}>
          <Img
            src={image}
            alt={alt}
            placeholder="blur"
            fill={true}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div
          className={cn(
            `gutter flex flex-col justify-between`,
            reverse && `order-last lg:order-first`
          )}
        >
          {title && <h2 className="mb-4 max-w-[20ch]">{title}</h2>}
          {description && <p className="mb-0 text-silver-400">{description}</p>}

          <div className={cn(title && `mt-16 md:mt-24`)}>{children}</div>
        </div>
      </div>
    </Section>
  )
}

export default SectionSplit
