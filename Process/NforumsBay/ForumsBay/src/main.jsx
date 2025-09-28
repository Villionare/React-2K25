import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthComponent from './components/auth/index.jsx'
import Home from './components/home/home.jsx'
import UserProvider from './context/user.jsx'
import LayoutBay from './layout/layout.jsx'
import AdminRequestSubmitted from './components/adminConfirmation/confirmation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <UserProvider>
        <LayoutBay />
      </UserProvider>
    ), // Wrap UserProvider around LayoutBay (and its <Outlet /> for children)
    children: [
      { index: true, element: <App /> }, // default route for '/'
      { path: 'auth', element: <AuthComponent /> },
      { path: 'home', element: <Home /> },
      { path: 'adminsubmitted', element: <AdminRequestSubmitted /> },
      { path: '*', element: <div>404 Not Found</div> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)