import {
  type BrandTheme,
  BrandThemes,
  type LayoutTheme,
  LayoutThemes,
} from 'lib/constants'

import AlertBanner from 'components/AlertBanner'
import Footer from 'components/Footer'
import Header from 'components/Header'

interface Props {
  children?: React.ReactNode
  loading?: boolean
  preview?: boolean
  theme?: LayoutTheme
  brand?: BrandTheme
}

const Layout = ({
  children,
  loading,
  preview,
  theme = LayoutThemes.DARK,
  brand = BrandThemes.ZEDA,
}: Props) => {
  // const layoutStyles = cn(
  //   'align-center relative flex min-h-screen w-full flex-col justify-between',
  //   theme
  // )

  return (
    <>
      <Header brand={brand} theme={theme} />
      <main className="nowrap flex w-full flex-auto flex-col">{children}</main>
      <AlertBanner preview={preview} loading={loading} />
      <Footer brand={brand} />
    </>
  )
}

export default Layout
