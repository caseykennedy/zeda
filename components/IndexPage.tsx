import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

import { Button, buttonVariants } from 'components/Button'
import Icon from 'components/Icon'
import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import Section from 'components/Section'
import Separator from 'components/Separator'
import TextFader from 'components/TextFader'

const HeroVideo = () => {
  return (
    <Section className="dark h-[100vh] overflow-hidden bg-black text-white">
      <div className="gap grid h-full grid-cols-2 content-end">
        <div className="relative z-10 flex flex-col justify-end">
          <p className=" max-w-[29ch] border-l border-white pl-6">
            <strong>Building together</strong>
            <br />
            We use technology to better lives—built using trust.
          </p>
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl dark:text-white">
            Building <TextFader />
            <br />
            together.
          </h1>
        </div>
      </div>

      <figure className="absolute left-0 top-0 z-0 h-full w-full">
        <Image
          src="/images/hero-test.png"
          alt="Zeda Inc. manufacturing facility"
          fill={true}
          style={{ objectFit: 'cover' }}
          sizes="100%"
        />
      </figure>
    </Section>
  )
}

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

const IndexPage = (props: IndexPageProps) => {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <div>
        <HeroVideo></HeroVideo>

        <Section>
          <h1>Index</h1>
          <h2>Index</h2>
          <h3>Index</h3>
          <h4>Index</h4>
        </Section>

        <Separator className="bg-slate-300" />

        <Section>
          <p>
            We’ve rebranded! PrinterPrezz is now Zeda, Inc. Five years ago
            PrinterPrezz was formed by 4 founders with the idea of using
            advanced manufacturing technologies to better orthopedic implants.
            Today, we are a global company servicing all highly regulated
            industries, including medical, space, defense, and aerospace. Zeda
            represents the strengths of both PrinterPrezz and Vertex
            Manufacturing, and our focus on starting from Z to A: customer
            first, product after.
          </p>
          <p>
            With increased life expectancy, new treatment modalities will need
            to emerge to meet unique patient needs, added Ho Chaw Sing,
            co-founder and CEO of NAMIC. We are pleased that PrinterPrezz has
            chosen Singapore and excited about what this expanded collaboration
            will bring – a close working relationship with our clinicians to
            realise the best ideas from napkin sketch to regulatory approval,
            positioning Singapore as a market leader in cost-effective
            patient-specific medical devices in Asia.
          </p>
        </Section>

        <Separator className="bg-slate-300" />

        <Section>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default" asChild>
              <Link href="/">Default</Link>
            </Button>
            <Button variant="primary" asChild>
              <Link href="/">Primary</Link>
            </Button>
            <Button variant="primary" asChild>
              <Link href="/">
                <Icon name="arrow-right" color="white" />
                Icon
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/">Secondary</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Outline</Link>
            </Button>
            <Button variant="primary" size="icon" asChild>
              <Link href="/">
                <Icon name="arrow-right" color="white" />
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/">Ghost</Link>
            </Button>
            <Link href="/" className={buttonVariants({ variant: 'link' })}>
              Link
            </Link>
          </div>
        </Section>
      </div>
    </>
  )
}

export default IndexPage
