import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.jsx'
import Quality from './views/Quality.jsx'
import Kromee from './views/Kromee.jsx'
import NeoShop from './views/NeoShop.jsx'
import Grayola from './views/Grayola.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/quality' element={<Quality/>}/>
        <Route path='/kromee' element={<Kromee/>}/>
        <Route path='/neoshop' element={<NeoShop/>}/>
        <Route path='/grayola' element={<Grayola/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
