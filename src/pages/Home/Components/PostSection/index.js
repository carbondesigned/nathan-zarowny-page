import React from "react"
import styled from "styled-components"

import { postOne, postTwo } from "./PostData"

import PostComponent from "./PostComponent"

const Posts = () => {
  return (
    <StyledPostSection>
      <h2 className="post-section-title">
        Stay <span>up to date</span> with Nathan Zarowny
      </h2>
      <PostComponent {...postOne} />
      <PostComponent {...postTwo} />
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
`

export default Posts
