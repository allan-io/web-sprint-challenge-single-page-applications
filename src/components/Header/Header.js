import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Title = styled.h1`
  text-align:center;
  color: black
`


const Header = () => {
  return (
    <>
      <Title>
        <Link className="link" to="/">Lambda Eats</Link>
      </Title>
      
    </>
  )
}

export default Header