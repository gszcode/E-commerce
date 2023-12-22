import Footer from '../Footer'
import SMNavbar from '../Navbar/SMNavbar'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
