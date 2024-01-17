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
const LazyAllProducts = lazy(() => import('./page/Products/AllProducts'))
const LazyPajamaBlanket = lazy(
  () => import('./page/Products/ClothesProducts/PajamasBlankets')
)
const LazyUnderwear = lazy(
  () => import('./page/Products/ClothesProducts/Underwear')
)
const LazySneakers = lazy(
  () => import('./page/Products/ClothesProducts/Sneakers')
)
const LazyBlankets = lazy(() => import('./page/Products/HomeProducts/Blankets'))
const LazySofas = lazy(() => import('./page/Products/HomeProducts/Sofas'))
const LazySeveral = lazy(() => import('./page/Products/HomeProducts/Several'))
const LazySportProducts = lazy(() => import('./page/Products/SportProducts'))
const LazyHomeProducts = lazy(() => import('./page/Products/HomeProducts'))
const LazyOffersProducts = lazy(() => import('./page/Products/OffersProducts'))
const LazyComplementsProducts = lazy(
  () => import('./page/Products/ComplementsProducts')
)
const LazyRoadBikes = lazy(() => import('./page/Products/BikeProducts'))
import Home from './page/Home'
import Login from './page/Login'
import Register from './page/Register'
import NotFound from './page/NotFound'
import Contact from './page/Contact'
import ForgotPassword from './page/ForgotPassword'
import RecoveryPassword from './page/RecoveryPassword'
import ProductDetail from './page/ProductDetail'
import Cart from './page/Cart'

axios.defaults.withCredentials = true

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/contact', element: <Contact /> },
  { path: '/products', element: <LazyAllProducts /> },
  { path: '/products/cart', element: <Cart /> },
  { path: '/products/pajama-blanket', element: <LazyPajamaBlanket /> },
  { path: '/products/underwear', element: <LazyUnderwear /> },
  { path: '/products/sneakers', element: <LazySneakers /> },
  { path: '/products/blankets', element: <LazyBlankets /> },
  { path: '/products/sofas', element: <LazySofas /> },
  { path: '/products/several', element: <LazySeveral /> },
  { path: '/products/sports', element: <LazySportProducts /> },
  { path: '/products/home', element: <LazyHomeProducts /> },
  { path: '/products/amazing-deals', element: <LazyOffersProducts /> },
  { path: '/products/road-bikes', element: <LazyRoadBikes /> },
  { path: '/products/complements', element: <LazyComplementsProducts /> },
  { path: '/product/:id', element: <ProductDetail /> },
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
