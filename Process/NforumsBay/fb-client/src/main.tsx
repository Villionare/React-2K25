import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.js'
import LayoutBay from './layout/layout.tsx'
import SessionProvider from './context/userData.js'
import AdminRequestSubmitted from './components/adminConfirmation/confirmation.js'
import ShowInputDialogContext from './context/showInputBox/provider.tsx'

//if noting is prensent in the ls then only the main app component can be accessible.

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ShowInputDialogContext>
        <SessionProvider>
          <LayoutBay />
        </SessionProvider>
      </ShowInputDialogContext>
    )
    ,
    children: [
      { index: true, element: <App /> }, // default route for '/'
      { path: 'home', element: <Home /> },
      { path: 'adminsubmitted', element: <AdminRequestSubmitted /> },
      { path: '*', element: <div>404 Not Found</div> },
    ]
  }
]);


createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router} />

)


