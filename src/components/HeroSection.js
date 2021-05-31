import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Theme from "../Theme"

import heroImg from "../img/main-section-bg.png"
import heroImgMobile from "../img/main-bg-mobile.png"

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <Theme>
        <div className="headline">
          <StyledMainTitle className="main-title">
            Nathan Zarowny
          </StyledMainTitle>
          <h3 className="sub-title">Alternative Pop</h3>
        </div>
        <div className="names">
          <h4 className="name">Nathan Zarowny</h4>
          <h4 className="name">Nathan Zarowny</h4>
          <h4 className="name">Nathan Zarowny</h4>
        </div>
        <img src={heroImgMobile} alt="" className="hero-img" />
      </Theme>
    </StyledHeroSection>
  )
}

const StyledHeroSection = styled(motion.section)`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 65vh;
  justify-content: space-between;

  .sub-title {
    color: white;
    font-size: clamp(1em, 3vw, 2em);
    padding: 0 3em;
  }

  .names {
    z-index: 1;
    color: transparent;
    -webkit-text-stroke: 0.05em;
    -webkit-text-stroke-color: white;
    font-size: clamp(2em, 4vw, 3em);
    letter-spacing: 0.1em;
    white-space: nowrap;
    width: 100%;
    display: grid;
    place-items: center;
  }

  .hero-img {
    width: 75%;
    height: 100%;
    object-fit: cover;
    object-position: right;
    position: absolute;
    z-index: -1;
  }
`

const StyledMainTitle = styled.h1`
  color: ${(p) => p.theme.colors.mainOrange};
  padding: 3em 1em 0 1em;
  font-size: clamp(2em, 4vw, 3em);
  white-space: nowrap;
`

export default HeroSection
