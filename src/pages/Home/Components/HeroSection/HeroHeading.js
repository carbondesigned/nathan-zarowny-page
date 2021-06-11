import React from "react"
import styled from "styled-components"
import Theme from "../../../../Theme"
import { HeadlineTitle } from "../../../../styles"

import HeroImgMobile from "../../../../Assets/img/main-bg-mobile.png"
import HeroImg from "../../../../Assets/img/main-section-bg.png"

const HeroHeading = () => {
  return (
    <StyledWrapper className="wrapper">
      <StyledHeroHeading>
        <StyledMainHeading className="main-heading">
          <HeadlineTitle className="hero-title">Nathan Zarowny</HeadlineTitle>
        </StyledMainHeading>
      </StyledHeroHeading>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  width: 100%;

  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
  }
`

const StyledHeroHeading = styled.section`
  color: ${(p) => p.theme.colors.mainOrange};
  min-height: 50vh;
  background-image: url(${HeroImgMobile});
  background-size: cover;
  background-position: right;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    background-image: url(${HeroImg});
  }

  @media only screen and (min-width: 1040px) {
    min-height: 75vh;
    padding-top: 5em;
  }
`

const StyledMainHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 6em 1em;

  .hero-title {
    position: relative;

    &::after {
      content: "Alternative Pop";
      color: #fff;
      font-size: 0.5em;
      position: absolute;
      bottom: -1em;
      left: 0;
    }
  }
`

export default HeroHeading
