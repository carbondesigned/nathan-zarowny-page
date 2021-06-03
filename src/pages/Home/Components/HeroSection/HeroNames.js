import React from "react"
import styled from "styled-components"

const HeroNames = () => {
  return (
    <StyledNames>
      <h4>Nathan Zarowny</h4>
      <h4>Nathan Zarowny</h4>
      <h4>Nathan Zarowny</h4>
    </StyledNames>
  )
}

const StyledNames = styled.div`
  width: 100%;
  text-align: center;
  color: transparent;
  -webkit-text-stroke-color: #fff;
  -webkit-text-stroke-width: 0.05em;
  font-size: clamp(1.35em, 3vw, 3em);
  transform: translateY(-2em);
`

export default HeroNames
