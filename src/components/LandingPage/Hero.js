import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const HeroImg = styled.img`
  width: 800px;
  height: 500px;
`
const OrderButton = styled.button`
  position: absolute;
  width: 230px;
  margin: auto 0;
  height: 60px;
  font-size: 2rem;
  background-color: rgba(200,0,0,0.7);
  color: yellow;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgba(200,0,0,0.9)
  }
`

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <HeroImg src="https://i.imgur.com/72nNQYW.jpg" />
      <OrderButton>
        <Link className="link" to="/pizza">Order Now</Link>
      </OrderButton>
    </div>
  )
}

export default Hero