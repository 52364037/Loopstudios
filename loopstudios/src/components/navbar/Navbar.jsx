import React from 'react';
import logo from '../../assets/img/logo.svg';
import {StylesNav} from './StyleNavbar';
const Navbar = () => {
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
    <StylesNav display= "flex">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <ul>
        {links.map((item, index) => (
          <li key={`${item.name}-${index}`}>{item.name}</li>
        ))}
      </ul>
    </StylesNav>
  );
}
export default Navbar;

