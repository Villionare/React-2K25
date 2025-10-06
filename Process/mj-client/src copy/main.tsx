import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthComponent from './components/auth/index.jsx'
import Home from './components/home/home.jsx'
import LayoutBay from './layout/layout.tsx'
import SessionProvider from './context/userData.jsx'
import AdminRequestSubmitted from './components/adminConfirmation/confirmation.js'

const check = localStorage.getItem("user");
console.log(check);

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutBay />, // parent layout with <Outlet />
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
  <SessionProvider>
    <RouterProvider router={router} />
  </SessionProvider>
)