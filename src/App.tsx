import { lazy, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import Layout from './components/Layout'
import Loader from './components/Loader'
import { useCheckLogin } from './hooks/useCheckLogin'

// Importaciones de páginas y rutas
const LazyProtectedRoute = lazy(() => import('./ProtectedRoute'))
const LazyAccountRoute = lazy(() => import('./page/Account'))
const LazyAccountEditRoute = lazy(() => import('./page/EditData'))
const LazyOrdersRoute = lazy(() => import('./page/Orders'))
const LazyFavoritesRoute = lazy(() => import('./page/FavoriteProducts'))
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import NotFound from './page/NotFound'
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
import HomeProducts from './page/Products/HomeProducts'
import OffersProducts from './page/Products/OffersProducts'
import ComplementsProducts from './page/Products/ComplementsProducts'
import RoadBikes from './page/Products/BikeProducts'
import ProductDetail from './page/ProductDetail'
import Cart from './page/Cart'

axios.defaults.withCredentials = true

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/contact', element: <Contact /> },
  { path: '/products', element: <AllProducts /> },
  { path: '/products/cart', element: <Cart /> },
  { path: '/products/pajama-blanket', element: <PajamaBlanket /> },
  { path: '/products/underwear', element: <Underwear /> },
  { path: '/products/sneakers', element: <Sneakers /> },
  { path: '/products/blankets', element: <Blankets /> },
  { path: '/products/sofas', element: <Sofas /> },
  { path: '/products/several', element: <Several /> },
  { path: '/products/sports', element: <SportProducts /> },
  { path: '/products/home', element: <HomeProducts /> },
  { path: '/products/amazing-deals', element: <OffersProducts /> },
  { path: '/products/road-bikes', element: <RoadBikes /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '/products/complements', element: <ComplementsProducts /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/recovery-password/:token', element: <RecoveryPassword /> }
]

const protectedRoutes = [
  { path: '/account', element: <LazyAccountRoute /> },
  { path: '/account/edit-data', element: <LazyAccountEditRoute /> },
  { path: '/orders', element: <LazyOrdersRoute /> },
  { path: '/products/favorites', element: <LazyFavoritesRoute /> }
]

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
          {/* Rutas públicas */}
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {/* Rutas protegidas */}
          <Route element={<LazyProtectedRoute />}>
            {protectedRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </Layout>
  )
}

export default App
