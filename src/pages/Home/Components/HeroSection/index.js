import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

// Components
import HeroHeading from "./HeroHeading"
import HeroNames from "./HeroNames"

const Hero = () => {
  return (
    <section>
      <HeroHeading />
      <HeroNames />
    </section>
  )
}

export default Hero
