import React from "react"
import HomePage from "./pages/HomePage"
import { Styles } from "./styles"
import Theme from "./Theme"

function App() {
  return (
    <div className="App">
      <Theme>
        <Styles />
        <HomePage />
      </Theme>
    </div>
  )
}

export default App
