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
import Cookies from 'js-cookie'
import { get } from './services/fetch'
import { useDispatch } from 'react-redux'
import { setUserData } from './store/features/user/userSlice'
axios.defaults.withCredentials = true

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  console.log(loading)

  useEffect(() => {
    const checkLogin = async () => {
      setLoading(true)
      const cookies = Cookies.get()

      if (!cookies.token) {
        dispatch(setUserData({ user: null, isAuthenticated: false }))
        setLoading(false)
        return
      }

      try {
        const response = await get('auth/verify-token')
        if (response.status !== 200) {
          dispatch(setUserData({ user: null, isAuthenticated: false }))
          return
        }

        dispatch(setUserData({ user: response.data, isAuthenticated: true }))
      } catch (error) {
        dispatch(setUserData({ user: null, isAuthenticated: false }))
      } finally {
        setLoading(false)
      }
    }

    checkLogin()
  }, [dispatch])

  return (
    <Layout>
      {loading ? (
        <div
          style={{
            height: '70vh',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p>Cargando...</p>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

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
