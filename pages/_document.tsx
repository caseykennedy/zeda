import { Analytics } from '@vercel/analytics/react'
import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body className="no-scrollbar">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}

export default Document
