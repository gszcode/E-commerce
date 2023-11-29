import Footer from '../Footer'
import SMNavbar from '../SMNavbar'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <main>
      <SMNavbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
