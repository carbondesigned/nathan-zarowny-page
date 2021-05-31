import { ThemeProvider } from "styled-components"

const theme = {
  fonts: {
    secFont: "Poppins, Sans-Serif",
  },
  colors: {
    mainOrange: "#FF8401",
    mainGray: "#C7C7C7",
    mainBlue: "#00007C",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}> {children} </ThemeProvider>
)

export default Theme
