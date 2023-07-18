import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'

import { Button, buttonVariants } from 'components/Button'
import Icon from 'components/Icon'
import MoreStories from 'components/MoreStories'
import Section from 'components/Section'
import Separator from 'components/Separator'
import TextFader from 'components/TextFader'

import Hero from './Hero'
import IndexPageHead from './IndexPageHead'
import Mission from './Mission'

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
        <Hero />
        <Mission />

        <Section className="border-b border-t border-black bg-violet-500 text-black">
          <div>Why us?</div>
          {/* <h2>We accelerate innovative ideas of every level at light speed.</h2> */}
        </Section>

        {/* <Separator className="bg-silver-100" />IndexPage */}
      </div>
    </>
  )
}

export default IndexPage
