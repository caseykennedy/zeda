import type { PropsWithChildren } from 'react'

// import Footer from "~/components/footer";
import Header from 'components/Header'

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="align-center relative flex min-h-screen w-full flex-col justify-between">
      <Header />
      <main className="nowrap flex w-full flex-auto flex-col">
        <div className="relative z-10 mx-auto flex h-full w-full flex-col">
          {props.children}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
