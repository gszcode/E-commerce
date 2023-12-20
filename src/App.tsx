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

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account" element={<Account />} />
        <Route path="account/edit-data" element={<EditData />} />
        <Route path="orders" element={<Orders />} />
        <Route path="favorite-products" element={<FavoriteProducts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
