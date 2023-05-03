import React from 'react'
import Navbar from '../navbar/Navbar';
import {StylesFooter} from './StyleFooter';
import { imgsSocialMedias } from '../../assets/img/socialMedias'

const linksSocialMedias= [
  {
    img: "",
    url: ""
  }

]

const Footer = () => {
  return (
    <StylesFooter display={"flex"}>
      <div><Navbar display={"block"}/></div>

     <div>social</div>
    </StylesFooter>
  )
}

export default Footer
