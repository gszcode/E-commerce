import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import NotFound from './page/NotFound'
import Account from './page/Account'
import EditData from './page/EditData'
import Orders from './page/Orders'
import FavoriteProducts from './page/FavoriteProducts'
import axios from 'axios'
import ProtectedRoute from './ProtectedRoute'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Loader from './components/Loader'
import { useCheckLogin } from './hooks/useCheckLogin'
import Contact from './page/Contact'
import ForgotPassword from './page/ForgotPassword'
import AllProducts from './page/Products/AllProducts'
import PajamaBlanket from './page/Products/ClothesProducts/PajamasBlankets'
import Underwear from './page/Products/ClothesProducts/Underwear'
import Sneakers from './page/Products/ClothesProducts/Sneakers'
import Blankets from './page/Products/HomeProducts/Blankets'
import Sofas from './page/Products/HomeProducts/Sofas'
import Several from './page/Products/HomeProducts/Several'
import SportProducts from './page/Products/SportProducts'
import RecoveryPassword from './page/RecoveryPassword'
axios.defaults.withCredentials = true

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const { checkLogin } = useCheckLogin({ setLoading })

  useEffect(() => {
    checkLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/pajama-blanket" element={<PajamaBlanket />} />
          <Route path="/products/underwear" element={<Underwear />} />
          <Route path="/products/sneakers" element={<Sneakers />} />
          <Route path="/products/blankets" element={<Blankets />} />
          <Route path="/products/sofas" element={<Sofas />} />
          <Route path="/products/several" element={<Several />} />
          <Route path="/products/sports" element={<SportProducts />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/recovery-password/:token"
            element={<RecoveryPassword />}
          />

          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Account />} />
            <Route path="/account/edit-data" element={<EditData />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/favorite-products" element={<FavoriteProducts />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Layout>
  )
}

export default App
