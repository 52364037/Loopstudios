import React, {useState} from 'react';
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

  const [MenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!MenuOpen);
  };


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
      <div className="burguer-btn" onClick={handleMenuClick}>
        <img src={imagesIcons(`./icon-hamburger.svg`)} alt="" />
      </div>
      {MenuOpen && (
        <ul className="menu-items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
  </StylesNav>
  );
}
export default Navbar;
