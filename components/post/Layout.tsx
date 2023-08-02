import AlertBanner from 'components/AlertBanner'
import Footer from 'components/Footer'
import Header from 'components/Header'

const Layout = ({
  children,
  loading,
  preview,
}: {
  children: React.ReactNode
  loading?: boolean
  preview: boolean
}) => {
  return (
    <>
      <div className="align-center relative flex min-h-screen w-full flex-col justify-between">
        <Header />
        <main className="nowrap flex w-full flex-auto flex-col">
          {children}
        </main>
        <AlertBanner preview={preview} loading={loading} />
        <Footer />
      </div>
    </>
  )
}

export default Layout