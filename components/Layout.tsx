import Footer from 'components/Footer'
import Header from 'components/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="align-center relative flex min-h-screen w-full flex-col justify-between">
      <Header />
      <main className="nowrap flex w-full flex-auto flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
