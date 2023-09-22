import type { StaticImageData } from 'next/image'
import Link from 'next/link'
import bgImg from 'public/images/about/hero-suit.jpg'
import { cn } from 'utils'

import Img from 'components/Img'
import { Icon, Section } from 'components/ui'
import Button from 'components/ui/Button'

interface FooterCTAFigureProps {
  src: StaticImageData
  alt: string
  className?: string
  overlayColor?: string
}

const FooterCTAFigure = ({
  src = bgImg,
  alt = 'Zeda, Inc., Manufacturing',
  className,
  overlayColor,
}: FooterCTAFigureProps) => {
  return (
    <figure
      className={cn(
        `absolute left-0 top-0 z-0 h-full w-full bg-violet-600`,
        overlayColor
      )}
    >
      <Img
        src={src}
        alt={alt}
        fill={true}
        style={{ objectFit: 'cover' }}
        className={cn(`mix-blend-screen`, className)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </figure>
  )
}

interface FooterCTAProps {
  heading?: string
  message: string
  href: string
  btnText: string
  children: React.ReactNode
}

const FooterCTA = ({
  heading = 'Join forces with us, let’s change the world together.',
  message = '<strong>Contact us</strong><br />We’d love to discuss the design and innovation challenges you are facing.',
  href = '/contact',
  btnText = 'Get in touch',
  children,
}: FooterCTAProps) => {
  return (
    <Section className="dark overflow-hidden bg-black">
      <div className="relative z-10">
        <div className="max-w-[52ch] text-white">
          <h2>{heading}</h2>
        </div>

        <div className="mt-72 border-l border-white pl-5">
          <p
            dangerouslySetInnerHTML={{ __html: message }}
            className="max-w-[32ch] text-white md:text-lg"
          />
          <Button
            variant="secondary"
            size="sm"
            className="relative z-20"
            asChild
          >
            <Link href={href}>
              <Icon
                name="arrow-right"
                className="relative -translate-x-1 transition-all group-hover:translate-x-1"
              />
              {btnText}
            </Link>
          </Button>
        </div>
      </div>

      {children}
    </Section>
  )
}

export { FooterCTA, FooterCTAFigure }
