import { toPlainText } from '@portabletext/react'
import * as demo from 'lib/demo.data'
import { type Settings } from 'lib/sanity.queries'
import Head from 'next/head'

import PageMeta from 'components/PageMeta'

export interface IndexPageHeadProps {
  settings: Settings
}

const IndexPageHead = ({ settings }: IndexPageHeadProps) => {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = settings
  const ogImageTitle = ogImage?.title || demo.ogImageTitle

  return (
    <Head>
      <title>{title}</title>
      <PageMeta />
      <meta
        key="description"
        name="description"
        content={toPlainText(description)}
      />
      <meta
        property="og:image"
        // Because OG images must have an absolute URL, we use the
        // `VERCEL_URL` environment variable to get the deployment’s URL.
        // More info:
        // https://vercel.com/docs/concepts/projects/environment-variables
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />
    </Head>
  )
}

export default IndexPageHead
