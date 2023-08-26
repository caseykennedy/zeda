import React, { ReactNode } from 'react'
import cn from 'classnames'

import AlertBanner from 'components/AlertBanner'
import Footer from 'components/Footer'
import Header from 'components/Header'

interface Props {
  children?: ReactNode
  loading?: boolean
  preview?: boolean
  theme?: 'light' | 'dark'
}

const Layout: React.FC<Props> = ({
  children,
  loading,
  preview,
  theme = 'dark',
}: Props) => {
  const layoutClassName = cn(
    'align-center relative flex min-h-screen w-full flex-col justify-between',
    theme
  )

  return (
    <div className={layoutClassName}>
      <Header />
      <main className="nowrap flex w-full flex-auto flex-col">{children}</main>
      <AlertBanner preview={preview} loading={loading} />
      <Footer />
    </div>
  )
}

export default Layout
