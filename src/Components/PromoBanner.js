import React from "react"
import styled, { keyframes, css } from "styled-components"

const PromoBanner = () => {
  return (
    <StyledPromoBanner>
      <div className="promo">
        <StyledPromo href="https://orcd.co/nzwwgio" target="_blank">
          New Release - What We got (is over)
        </StyledPromo>
      </div>
    </StyledPromoBanner>
  )
}

const StyledPromoBanner = styled.div`
  width: 100%;
  z-index: 10;
  background-color: white;
  padding: 0.5em;
  position: fixed;
  top: 0;

  .promo {
    /* overflow: hidden; */
  }
`

const BannerAnim = keyframes`
    0% {
        transform: translateX(105%) ;
    }

    100% {
      transform: translateX(-105%);
    }

`

// const PromoTranslate = styled.div`
//   animation: ${BannerAnim} 5s linear infinite;
// `

const StyledPromo = styled.a`
  color: black;
  text-decoration: none;
  display: inline-block;
  animation: ${BannerAnim} 20s linear infinite;
  transition: 300ms;
  width: 100%;
  white-space: nowrap;
`

export default PromoBanner
