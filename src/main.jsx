import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import "./index.css";
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
        <Toaster/>

  </StrictMode>,
)
