import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRouterCreate from './Router/Router.jsx'
import AuthProvider from './Provider/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={myRouterCreate}></RouterProvider>
      </AuthProvider>
  </React.StrictMode>,
)
