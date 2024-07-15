import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './assets/Components/Router/Router'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
