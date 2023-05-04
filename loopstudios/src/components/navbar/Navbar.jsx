import React from 'react';
import logo from '../../assets/img/logo.svg';
import {StylesNav} from './StyleNavbar';

const imagesIcons = require.context('../../assets/img', true)

const Navbar = ({display, margin, padding}) => {
  const links= [
    {
      name: "About",
      url: ""
    },
    {
      name: "Careers",
      url: ""
    },
    {
      name: "Events",
      url: ""
    },
    {
      name: "Products",
      url: ""
    },
    {
      name: "Support",
      url: ""
    }

  ]


  return (
    <StylesNav display={display} margin={margin} padding={padding}>
      <figure>
        <img src={logo} alt="" />
      </figure>
      <ul>
        {links.map((item, index) => (
          <li key={`${item.name}-${index}`}>
            {item.name}
            <div className="line"></div>
          </li>
        ))}
      </ul>
      <div className="burguer-btn">
        <img src={imagesIcons(`./icon-hamburger.svg`)} alt="" />
      </div>
  </StylesNav>
  );
}
export default Navbar;
