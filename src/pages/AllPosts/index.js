import React from "react"
import styled from "styled-components"

import PostComponent from "../Home/Components/PostSection/PostComponent"
import mainBg from "../../Assets/img/background-img.png"

import {
  postOne,
  postTwo,
  postThree,
} from "../Home/Components/PostSection/PostData"
import { HeadlineTitle } from "../../styles"
import Theme from "../../Theme"

const index = () => {
  return (
    <StyledPosts>
      <h1 className="title">
        Stay up to date with <span>Nathan Zarowny</span>
      </h1>
      <div className="wrapper">
        <PostComponent {...postOne} />
        <PostComponent {...postTwo} />
        <PostComponent {...postThree} />
      </div>
      <StyledContactBg />
    </StyledPosts>
  )
}

const StyledPosts = styled.div`
  min-height: 100vh;
  margin-top: 5em;

  .title {
    color: white;
    padding: 1em;

    span {
      color: ${(p) => p.theme.colors.mainOrange};
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1em;
    width: 100%;
    padding: 1em;
  }
`

const StyledContactBg = styled.section`
  background-image: url(${mainBg});
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  background-position: center;
`

export default index
