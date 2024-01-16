import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import { Suspense } from 'react'
import Loader from './components/Loader/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
)
