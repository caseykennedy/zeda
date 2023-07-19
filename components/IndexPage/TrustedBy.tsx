import Image from 'next/image'
import Link from 'next/link'

import { Button } from 'components/Button'
import Icon from 'components/Icon'
import Section from 'components/Section'
import SectionTitle from 'components/SectionTitle'

const TrustedBy = () => {
  return (
    <Section className="border-t border-black">
      <h2>
        Innovations that once took years can now be accomplished in months,
        weeks or even days. We take great ideas and move them through complex
        hurdles in a short period of time.
      </h2>

      <Button variant="primary" asChild>
        <Link href="/">
          <Icon name="arrow-right" color="white" />
          Partner with us
        </Link>
      </Button>

      <div className="mt-24">
        <SectionTitle>Trusted by</SectionTitle>
      </div>
    </Section>
  )
}

export default TrustedBy
