import React from 'react'
import Navbar from '../navbar/Navbar';
import { StyleImage } from './StyleHeader'

const Header = () => {
  return (
    <StyleImage>
      <header>
      <Navbar display={"flex"} padding={"3rem 10rem"}/>
      <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
      </header>
      </StyleImage>
  )
}

export default Header
