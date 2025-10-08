import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthComponent from './components/auth/index.js'
import Home from './components/home/home.js'
import LayoutBay from './layout/layout.tsx'
import SessionProvider from './context/userData.js'
import AdminRequestSubmitted from './components/adminConfirmation/confirmation.js'

//if noting is prensent in the ls then only the main app component can be accessible.

const router = createBrowserRouter([
  {
    path: '/',
    element: <SessionProvider> <LayoutBay /> </SessionProvider>, // parent layout with <Outlet />
    children: [
      { index: true, element: <App /> }, // default route for '/'
      { path: 'auth', element: <AuthComponent /> },
      { path: 'home', element: <Home /> },
      { path: 'adminsubmitted', element: <AdminRequestSubmitted /> },
      { path: '*', element: <div>404 Not Found</div> },
    ]
  }
]);


createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />

)