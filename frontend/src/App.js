import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Navbar/Home'
import Footer from './Navbar/Footer'
import Nav from './Navbar/Nav'
import "./Style.css"
const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Nav />
        {/* <Home/> */}
        <Footer/>
      </BrowserRouter>


    </div>
  )
}

export default App