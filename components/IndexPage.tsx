import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import IndexPageHead from 'components/IndexPageHead'
import MoreStories from 'components/MoreStories'
import Section from 'components/Section'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
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

        <br />
        <hr />
        <br />

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

        <br />
        <hr />
        <br />

        <Section>
          <p>
            <a href="https://zeda-inc.com">https://zeda-inc.com</a>
          </p>
        </Section>
      </div>
    </>
  )
}

function HeroVideo() {
  return (
    <Section px="0" className="h-[70vh] bg-black">
      <div className="relative w-full"/>
    </Section>
  )
}