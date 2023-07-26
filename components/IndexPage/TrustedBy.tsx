import Image from 'next/image'
import Link from 'next/link'

import Marquee from 'components/Marquee'
import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import Section from 'components/ui/Section'
import SectionTitle from 'components/ui/SectionTitle'

const TrustedBy = () => {
  return (
    <Section className="">
      <div className="gap grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8">
          <h2>
            Innovations that once took years can now be accomplished in months,
            weeks or even days. We take great ideas and move them through
            complex hurdles in a short period of time.
          </h2>
        </div>

        <div className="col-span-4 col-start-9 flex justify-end">
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
        </div>
      </div>

      <div className="mt-72">
        <SectionTitle>Trusted by</SectionTitle>

        <div>
          <Marquee speed={40}>
            {data?.map(({ partner }, idx) => (
              <div className="px-8" key={idx}>
                <Image
                  src={`/images/partner-logos/${partner}.png`}
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
    </Section>
  )
}

export default TrustedBy

const data = [{ partner: 'carbon' }]
