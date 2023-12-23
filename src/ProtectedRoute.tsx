import { Navigate, Outlet } from 'react-router-dom'
import { useAuthenticate } from './hooks/useAuthenticate'

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthenticate()

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
