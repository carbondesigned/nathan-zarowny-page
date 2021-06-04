import React from "react"
import styled from "styled-components"

//Icons
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { FaSpotify } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"

const Socials = () => {
  return (
    <StyledSocials>
      <a href="https://instagram.com/">
        <AiFillInstagram />
      </a>
      <a href="https://youtube.com/">
        <AiFillYoutube />
      </a>
      <a href="https://spotify.com/">
        <FaSpotify />
      </a>
      <a href="https://tiktok.com/">
        <SiTiktok />
      </a>
    </StyledSocials>
  )
}

const StyledSocials = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 1em;
  font-size: 1.2em;

  a {
    color: #000;
    padding: 1em 0;
    &:hover {
      color: ${(p) => p.theme.colors.mainOrange};
    }
  }
`

export default Socials
