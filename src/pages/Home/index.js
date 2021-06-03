import React, { useState } from "react"
import { post } from "request"
import styled from "styled-components"
import mainBg from "../../Assets/img/background-img.png"

import Hero from "./Components/HeroSection"
import Posts from "./Components/PostSection"

const index = () => {
  //State

  return (
    <>
      <StyledHomeBg />
      <Hero />
      <Posts />
    </>
  )
}

const StyledHomeBg = styled.section`
  background-image: url(${mainBg});
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-position: center;
`

export default index
