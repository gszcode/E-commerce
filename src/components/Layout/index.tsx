import Footer from '../Footer'
import SMNavbar from '../Navbar/SMNavbar'

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
