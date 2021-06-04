import React from "react"
import styled from "styled-components"

import { postOne, postTwo } from "./PostData"

import PostComponent from "./PostComponent"
import { HeadlineTitle } from "../../../../styles"

const Posts = () => {
  return (
    <StyledPostSection>
      <HeadlineTitle className="post-section-title">
        Stay <span>up to date</span> with Nathan Zarowny
      </HeadlineTitle>
      <div className="posts">
        <PostComponent {...postOne} />
        <PostComponent {...postTwo} />
      </div>
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
    color: white;
    margin: 0 0 1em 0;
    padding-left: 1em;
    position: relative;
    align-self: flex-start;

    &::after {
      content: "";
      height: 100%;
      position: absolute;
      background: ${(p) => p.theme.colors.mainOrange};
      width: 0.2em;
      top: 0;
      left: 0;
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

export default Posts
