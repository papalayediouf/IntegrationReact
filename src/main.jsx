import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Banner from './Banner.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Banner />
    <App />
    <Footer/>
  </StrictMode>,
)
