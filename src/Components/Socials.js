import React from "react"
import styled from "styled-components"

//Icons
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { FaSpotify } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"

const Socials = () => {
  return (
    <StyledSocials>
      <a href="https://www.instagram.com/nathan_zarowny/">
        <AiFillInstagram />
      </a>
      <a href="https://www.youtube.com/channel/UC2NI5_bZRtcR8w9Re4wPNnQ">
        <AiFillYoutube />
      </a>
      <a href="https://open.spotify.com/artist/1EeDWxd7UtEygWCgkSCFhR?si=Kn71-4XbTh6eNvChfqOE4w&dl_branch=1&nd=1">
        <FaSpotify />
      </a>
      <a href="https://www.tiktok.com/@nathan_zarowny?lang=en">
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
