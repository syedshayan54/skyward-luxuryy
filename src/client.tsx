import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './app'
import { RouterProvider } from '@tanstack/react-router'
import './index.css'

const rootElement = document.getElementById('app')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
