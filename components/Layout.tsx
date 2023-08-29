import cn from 'classnames'
import { type BrandTheme, BrandThemes } from 'lib/constants'

import AlertBanner from 'components/AlertBanner'
import Footer from 'components/Footer'
import Header from 'components/Header'

interface Props {
  children?: React.ReactNode
  loading?: boolean
  preview?: boolean
  theme?: 'light' | 'dark'
  brand?: BrandTheme
}

const Layout = ({
  children,
  loading,
  preview,
  theme = 'dark',
  brand = BrandThemes.zeda,
}: Props) => {
  const layoutClassName = cn(
    'align-center relative flex min-h-screen w-full flex-col justify-between',
    theme
  )

  return (
    <div className={layoutClassName}>
      <Header brand={brand} />
      <main className="nowrap flex w-full flex-auto flex-col">{children}</main>
      <AlertBanner preview={preview} loading={loading} />
      <Footer brand={brand} />
    </div>
  )
}

export default Layout
