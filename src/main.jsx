import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './Context'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter  
     basename="/design-objects"
     >
    <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
  