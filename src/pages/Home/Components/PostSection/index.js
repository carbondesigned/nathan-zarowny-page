import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { RSadBoy, RWhatWeGot } from "./PostData"

import PostComponent from "./PostComponent"
import { HeadlineTitle } from "../../../../styles"

const Posts = () => {
  return (
    <StyledPostSection>
      <h2 className="post-section-title">
        Stay <span>up to date</span> with Nathan Zarowny
      </h2>
      <div className="posts">
        <PostComponent {...RWhatWeGot} />
        <PostComponent {...RSadBoy} />
      </div>
      <StyledButton to="/posts">Catch up With Nathan</StyledButton>
    </StyledPostSection>
  )
}

const StyledPostSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2em;
  flex-direction: column;
  gap: 1.5em;

  .post-section-title {
    font-size: clamp(1em, 4vw, 2.75em);
    color: white;
    margin: 0 0 1em 0;
    padding-left: 1em;
    position: relative;
    align-self: flex-start;
    transition: 300ms;
    background: rgb(255, 132, 1);
    background: linear-gradient(
      47deg,
      rgba(255, 132, 1, 0.2) 0%,
      rgba(0, 0, 0, 0.15) 45%
    );
    cursor: default;

    &:hover {
      background: rgb(255, 132, 1);
      background: linear-gradient(
        47deg,
        rgba(255, 132, 1, 0.65) 0%,
        rgba(0, 0, 0, 0.15) 45%
      );
      transition: 300ms;
      transform: translateX(10px);
      &:hover::after {
        width: 0.3em;
      }
    }

    &::after {
      content: "";
      height: 100%;
      position: absolute;
      background: ${(p) => p.theme.colors.mainOrange};
      width: 0.2em;
      top: 0;
      left: 0;
      transition: 300ms;
    }

    span {
      color: ${(p) => p.theme.colors.mainOrange};
    }
  }

  .posts {
    display: flex;
    width: 100%;
    gap: 2em;
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }
`

const StyledButton = styled(Link)`
  background-color: white;
  color: black;
  padding: 1em 2em;
  text-decoration: none;
  white-space: nowrap;
  margin: 1em 0;
`

export default Posts
