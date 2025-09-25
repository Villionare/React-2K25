import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthComponent from './components/auth/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: []
  },
  {
    path: '/auth',
    element: <AuthComponent />
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
