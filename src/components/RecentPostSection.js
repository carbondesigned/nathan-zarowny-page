import React from "react"
import styled from "styled-components"
import { HeadlineTitle } from "../styles"
import Theme from "../Theme"

import PreSaveCover from "../img/pre-order-cover.png"
import sadBoyCover from "../img/cover-bg.png"

const RecentPostSection = () => {
  const Genres = ["Pre Save", "Release", "Album"]
  return (
    <StyledPostSection className="recent-posts">
      <HeadlineTitle className="recent-post-title">
        <span>Recent</span> from Nathan Zarowny
      </HeadlineTitle>
      <Post
        genre={Genres[0]}
        cover={PreSaveCover}
        title="What We Got (is over)"
        cta="Pre Save Now"
      />
      <Post
        genre={Genres[1]}
        cover={sadBoyCover}
        title="Sad Boy"
        cta="Listen Now"
      />
    </StyledPostSection>
  )
}

const Post = ({ genre, title, cover, cta }) => {
  return (
    <StyledPost className="post" style={{ backgroundImage: `url(${cover})` }}>
      <div className="post-heading">
        <h4 className="genre">{genre}</h4>
        <h2 className="title">{title}</h2>
      </div>
      <a className="cta cover-cta">{cta}</a>
    </StyledPost>
  )
}

const StyledPostSection = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 2em;
  margin: 2em;
  color: white;

  .recent-post-title {
    padding: 2em 0 1em;

    span {
      color: ${(p) => p.theme.colors.mainOrange};
    }
  }
`

const StyledPost = styled.div`
  background: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .post-heading {
    margin-bottom: 5em;
    .genre {
      font-family: ${(p) => p.theme.fonts.secFont};
      text-transform: uppercase;
      color: ${(p) => p.theme.colors.mainGray};
      text-align: center;
    }

    .title {
      font-family: ${(p) => p.theme.fonts.secFont};
      font-size: clamp(1.5em, 3vw, 4em);
    }
  }

  .cta {
    border: 0.2em solid white;
    padding: 1em 2em;
    font-size: clamp(1.2em, 3vw, 2em);
    transition: 300ms;
    cursor: pointer;

    &:hover {
      background: ${(p) => p.theme.colors.mainOrange};
      border-color: ${(p) => p.theme.colors.mainOrange};
    }
  }
`

export default RecentPostSection
