import React, { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Styles } from "./styles"
import Theme from "./Theme"

import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import Home from "./pages/Home"
import Footer from "./Components/Footer"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="App">
      <Theme>
        <Styles />
        <Router>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <Home />
          <Footer />
        </Router>
      </Theme>
    </div>
  )
}

export default App
