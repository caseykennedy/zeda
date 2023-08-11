import { type StaticImageData } from 'next/image'
import Link from 'next/link'
import bgImg from 'public/images/about/work-suit.jpg'

import Img from 'components/Img'
import Button from 'components/ui/Button'
import Section from 'components/ui/Section'

import Icon from './ui/Icon'

interface Props {
  heading: string
  message: string
  src: StaticImageData
  alt: string
  href: string
  btnText: string
}

const FooterCTA = ({
  heading = 'Join forces with us. Let’s change the world together',
  message = '<strong>Contact us</strong><br />We’d love to discuss the design and innovation challenges you are facing.',
  src = bgImg,
  alt = 'Zeda Inc. - Contact us',
  href = '/contact',
  btnText = 'Get in touch',
}: Props) => {
  return (
    <Section className="dark overflow-hidden bg-black">
      <div className="relative z-10">
        <div className="max-w-[48ch] text-white">
          <h2>{heading}</h2>
        </div>

        <div className="mt-72 border-l border-white pl-5">
          <p
            dangerouslySetInnerHTML={{ __html: message }}
            className="max-w-[32ch] text-lg text-white"
          />
          <Button variant="outline" className="relative z-20" asChild>
            <Link href={href}>
              <Icon
                name="arrow-right"
                color="white"
                className="relative -translate-x-1 transition-all group-hover:translate-x-1"
              />
              {btnText}
            </Link>
          </Button>
        </div>
      </div>

      <figure className="absolute left-0 top-0 z-0 h-full w-full bg-violet-600">
        <Img
          src={src}
          alt={alt}
          fill={true}
          style={{ objectFit: 'cover' }}
          className="mix-blend-screen"
        />
      </figure>
    </Section>
  )
}

export default FooterCTA
