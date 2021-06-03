import React from "react"
import { Styles } from "./styles"
import Theme from "./Theme"

import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Theme>
        <Styles />
        <Home />
      </Theme>
    </div>
  )
}

export default App
