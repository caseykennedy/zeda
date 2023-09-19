import { urlForImage } from 'lib/sanity.image'
import type { Partner } from 'lib/sanity.queries'
import Link from 'next/link'

import Img from 'components/Img'
import Marquee from 'components/Marquee'
import { Button, Icon } from 'components/ui'
import SectionPanel from 'components/ui/SectionPanel'
import SectionTitle from 'components/ui/SectionTitle'

const TrustedBy = ({
  partners,
  title,
}: {
  partners: Partner[]
  title: string
}) => {
  return (
    <SectionPanel
      title={title}
      btn={
        <Button variant="primary" asChild>
          <Link href="/about/#partners">
            <Icon
              name="arrow-right"
              className="relative -translate-x-1 transition-all group-hover:translate-x-1"
            />
            Why partner with us?
          </Link>
        </Button>
      }
    >
      <div className="mt-32 md:mt-64">
        <SectionTitle>Trusted by</SectionTitle>

        <div className="">
          <Marquee speed={120}>
            {partners.map(({ name, logo }, idx) => (
              <div className="gutter-x" key={idx}>
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
