import React from "react"
import styled from "styled-components"

import mainBg from "../../Assets/img/background-img.png"

const index = () => {
  return (
    <StyledContactSection>
      <h1>Contact</h1>
      <form class="form" name="contact" method="POST" data-netlify="true">
        <label for="text">Enter Your Name</label>
        <input type="text" class="Name" required></input>

        <label for="email">Enter Your Email</label>
        <input type="email" required></input>

        <label for="textarea">Questions? Information?</label>
        <textarea
          name="message"
          id="input"
          cols="30"
          rows="10"
          class="input"
        ></textarea>

        <input type="submit" class="submit-btn"></input>
      </form>
      <StyledContactBg />
    </StyledContactSection>
  )
}

const StyledContactSection = styled.section`
  margin-top: 10em;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .form {
    font-family: ${(p) => p.theme.fonts.secFont};
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2em;
    margin-top: 1em;

    @media screen and (min-width: 1040px) {
      padding: 0 15em;
    }

    input {
      background-color: transparent;
      border: 0.2em solid white;
      outline: ${(p) => p.theme.colors.mainOrange};
      color: white;
      padding: 0.5em 1em;
      margin-bottom: 1em;
    }

    textarea {
      background-color: transparent;
      border: 0.2em solid white;
      padding: 0.5em 1em;
      outline: none;

      &:focus {
        border: 0.2em solid ${(p) => p.theme.colors.mainOrange};
        background-color: #fff;
        color: #000;
      }
    }

    .submit-btn {
      background-color: white;
      color: black;
      padding: 1em 2em;
      font-weight: 800;
      margin-top: 5em;
    }
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
