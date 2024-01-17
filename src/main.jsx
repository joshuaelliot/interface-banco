import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DashboardUser from './components/dashboard-user.jsx'
import SingUp from './components/sing-up.jsx'
import ResetPassword from './components/reset-password.jsx'
import Protected from './components/protected-route.jsx'
import { AuthProvider } from './auth/AuthProvider.jsx'

const router = createBrowserRouter([{
  path:"/",
  element:<App></App>
},
{
    path:"/dashboard",
    element:<DashboardUser/>
},
{
  path:"/sing-up",
  element:<SingUp/>
},
{
  path:"/reset-password",
  element:<ResetPassword/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
   
  </React.StrictMode>,
)
