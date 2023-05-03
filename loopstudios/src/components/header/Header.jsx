import React from 'react'
import Navbar from '../navbar/Navbar';
import { StyleImage } from './StyleHeader'

const Header = () => {
  return (
    <StyleImage>
      <header>
      <Navbar display={"flex"}/>
      </header>
      </StyleImage>
  )
}

export default Header
