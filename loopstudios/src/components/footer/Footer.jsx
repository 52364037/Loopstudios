import React from 'react'
import Navbar from '../navbar/Navbar';
import {StyleSocialMedia, StylesFooter} from './StyleFooter';

const imagesSocialMedias = require.context('../../assets/img/socialMedias', true)


const linksSocialMedias = [
  {
    img: imagesSocialMedias(`./icon-facebook.svg`),
    url: ""
  },
  {
    img: imagesSocialMedias(`./icon-instagram.svg`),
    url: ""
  },
  {
    img: imagesSocialMedias(`./icon-pinterest.svg`),
    url: ""
  },
  {
    img: imagesSocialMedias(`./icon-twitter.svg`),
    url: ""
  }
];

const Footer = () => {
  return (
    <StylesFooter display={"flex"}>
      <div><Navbar display="block" margin="0 0 1rem" padding="0"/></div>
      <StyleSocialMedia>
        <ul>
          {linksSocialMedias.map((item, index) => (
              <li key={`${item.img}-${index}`}><img src={item.img}alt="" />
              <div className="line"></div> </li>
          ))}
        </ul>
        <div>2021 Loopstudios. All rights reserved.</div>
      </StyleSocialMedia>
    </StylesFooter>
  )
}

export default Footer
