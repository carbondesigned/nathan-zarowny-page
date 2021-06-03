import React from "react"
import styled from "styled-components"

const PostComponent = ({ genre, title, cta, cover, url }) => {
  return (
    <StyledPost style={{ backgroundImage: `url(${cover})` }}>
      <div className="top-section">
        <h4 className="genre">{genre}</h4>
        <h2 className="post-title">{title}</h2>
      </div>
      <StyledCta href="#" className="post-cta">
        {cta}
      </StyledCta>
    </StyledPost>
  )
}

const StyledPost = styled.div`
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  min-height: 30vh;
  background-size: cover;
  background-position: center;
  padding: 1em;
  border-radius: 1em;
  -webkit-box-shadow: inset 1px 50px 150px 5px #000000;
  box-shadow: inset 1px 50px 150px 5px #000000;
  transition: 300ms;

  .post-cta {
    transition: 300ms;
  }

  &:hover,
  &:focus {
    -webkit-box-shadow: inset 1px 150px 500px 5px #000000;
    box-shadow: inset 1px 150px 500px 5px #000000;
    transform: scale(1.02);

    .post-cta {
      background: ${(p) => p.theme.colors.mainOrange};
      border-color: ${(p) => p.theme.colors.mainOrange};
    }
  }

  .top-section {
    font-family: ${(p) => p.theme.fonts.secFont};
    text-align: left;
    width: 100%;

    .genre {
      text-transform: uppercase;
      color: ${(p) => p.theme.colors.mainGray};
    }
  }
`

const StyledCta = styled.a`
  background: transparent;
  color: #fff;
  text-decoration: none;
  padding: 1em 2em;
  margin-top: 5em;
  border: 0.2em solid #fff;
`

export default PostComponent
