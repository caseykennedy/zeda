import Image from 'next/image'
import Link from 'next/link'

import Marquee from 'components/Marquee'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import SectionPanel from 'components/ui/SectionPanel'
import SectionTitle from 'components/ui/SectionTitle'

const data = [{ partner: 'carbon' }]

const TrustedBy = () => {
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

        <div>
          <Marquee speed={40}>
            {data?.map(({ partner }, idx) => (
              <div className="px-8" key={idx}>
                <Image
                  src={`/images/partners/black/${partner}.png`}
                  alt="Zeda Inc. manufacturing facility"
                  height={80}
                  width={160}
                  quality={100}
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
