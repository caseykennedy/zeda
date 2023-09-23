import { lazy } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { readToken } from 'lib/sanity.api'
import { getAllPeople, getClient, getSettings } from 'lib/sanity.client'
import { type Person, type Settings } from 'lib/sanity.queries'
import { type GetStaticProps } from 'next'
import { AppProps } from 'next/app'
import { Inter, Urbanist } from 'next/font/google'

import 'styles/globals.css'

export const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

interface Query {
  [key: string]: string
}

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

interface PageDataProps extends SharedPageProps {
  people: Person[]
  settings: Settings
}

const PreviewProvider = lazy(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  console.log(
    `%c Zeda, Inc. — crafted with care [ www.caseykennedy.me ] `,
    `background: hsla(252, 100%, 72%, 1); color: #000`
  )
  return (
    <>
      <style jsx global>{`
        :root {
          --font-urbanist: ${urbanist.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <>
          <Component {...pageProps} />
          <Analytics />
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps<PageDataProps, Query> = async (
  ctx
) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [settings, people = []] = await Promise.all([
    getSettings(client),
    getAllPeople(client),
  ])

  return {
    props: {
      settings,
      people,
      draftMode,
      token: readToken,
    },
  }
}
