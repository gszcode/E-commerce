import { ToastContainer } from 'react-toastify'
import Footer from '../Footer'
import SMNavbar from '../Navbar/SMNavbar'
import { Slide } from 'react-toastify'

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <main>
      <ToastContainer
        position="bottom-right"
        limit={2}
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />

      <SMNavbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
