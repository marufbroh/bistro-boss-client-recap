import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-2xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  </AuthProvider>

)
