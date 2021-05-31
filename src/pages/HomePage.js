import React from "react"
import styled from "styled-components"
import HeroSection from "../components/HeroSection"
import RecentPostSection from "../components/RecentPostSection"

import backgroundImg from "../img/background-img.png"

const HomePage = () => {
  return (
    <React.Fragment>
      <StyledBg />
      <HeroSection />
      <RecentPostSection />
    </React.Fragment>
  )
}

const StyledBg = styled.div`
  background-image: url(${backgroundImg});
  position: fixed;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export default HomePage
