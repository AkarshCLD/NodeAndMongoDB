import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Navbar/Nav'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Nav />
      </BrowserRouter>


    </div>
  )
}

export default App