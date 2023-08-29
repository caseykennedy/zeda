import { urlForImage } from 'lib/sanity.image'
import type { Partner } from 'lib/sanity.queries'
import Link from 'next/link'

import Img from 'components/Img'
import Marquee from 'components/Marquee'
import { Button, Icon } from 'components/ui'
import SectionPanel from 'components/ui/SectionPanel'
import SectionTitle from 'components/ui/SectionTitle'

const TrustedBy = ({ partners }: { partners: Partner[] }) => {
  return (
    <SectionPanel
      title="Innovations that once took years can now be accomplished in months, weeks or even days. We take great ideas and move them through complex hurdles in a short period of time."
      btn={
        <Button variant="primary" asChild>
          <Link href="/">
            <Icon
              name="arrow-right"
              color="white"
              className="relative -translate-x-1 transition-all group-hover:translate-x-1"
            />
            Partner with us
          </Link>
        </Button>
      }
    >
      <div className="mt-32 md:mt-64">
        <SectionTitle>Trusted by</SectionTitle>

        <div className="">
          <Marquee speed={80}>
            {partners.map(({ name, logo }, idx) => (
              <div className="px-10" key={idx}>
                <Img
                  src={urlForImage(logo).width(180).height(80).url()}
                  alt={`Proudly partnered with ${name}`}
                  blurDataURL={logo.metadata.lqip}
                  fill={false}
                  width={180}
                  height={80}
                  className="grayscale invert"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </SectionPanel>
  )
}

export default TrustedBy
