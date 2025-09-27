import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthComponent from './components/auth/index.jsx'
import Home from './components/home/home.jsx'
import LayoutBay from './components/layout/layout.jsx'
import { UserTypeContext } from './context/user.jsx'

const anyUser = false;

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBay />, // parent layout with <Outlet />
    children: [
      { index: true, element: <App /> }, // default route for '/'
      { path: 'auth', element: <AuthComponent /> },
      { path: 'home', element: <Home /> },
      { path: '*', element: <div>404 Not Found</div> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <UserTypeContext>
    <RouterProvider router={router} />
  </UserTypeContext>
)
