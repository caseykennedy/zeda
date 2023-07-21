import * as demo from 'lib/demo.data'
import type { Post, Settings } from 'lib/sanity.queries'

import MoreStories from 'components/MoreStories'

import AtGlance from './AtGlance'
import Careers from './Careers'
import Hero from './Hero'
import IndexPageHead from './IndexPageHead'
import Mission from './Mission'
import SolutionSwiper from './SolutionSwiper'
import TrustedBy from './TrustedBy'
import WhyUs from './WhyUs'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export const IndexPage = (props: IndexPageProps) => {
  const { preview, loading, posts, settings } = props
  // const [heroPost, ...morePosts] = posts || []
  // const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Hero />
      <Mission />
      <WhyUs />
      <AtGlance />
      <SolutionSwiper />
      <TrustedBy />

      <div className="h-72 bg-black" />

      <Careers />
    </>
  )
}

export default IndexPage
