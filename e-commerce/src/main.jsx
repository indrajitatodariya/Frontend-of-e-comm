import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Router } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <CartProvider >
      <App />
      </CartProvider>
    </AuthProvider>,
)
