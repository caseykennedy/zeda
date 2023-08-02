import * as React from 'react'
import { cn } from 'utils'

import AlertBanner from 'components/AlertBanner'
import Footer from 'components/Footer'
import Header from 'components/Header'

interface Props {
  children?: React.ReactNode
  loading?: boolean
  preview?: boolean
  theme?: 'light' | 'dark'
}

const Layout = ({ children, loading, preview, theme = 'dark' }: Props) => {
  return (
    <div
      className={cn(
        `align-center relative flex min-h-screen w-full flex-col justify-between`,
        theme
      )}
    >
      <Header />
      <main className="nowrap flex w-full flex-auto flex-col">{children}</main>
      <AlertBanner preview={preview} loading={loading} />
      <Footer />
    </div>
  )
}

export default Layout
