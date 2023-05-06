import React, {useState} from 'react';
import logo from '../../assets/img/logo.svg';
import {StylesNav, StylesMenuBurger, StylesNavCloseBtn} from './StyleNavbar';

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
    console.log("soy click")
    setMenuOpen(!MenuOpen);
  };

  const menuBurgerClass = MenuOpen ? "close-btn" : "burguer-btn";

  return (
    <>
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
        <div className={menuBurgerClass} onClick={ () => handleMenuClick()}>
          <img src={imagesIcons(`./icon-hamburger.svg`)} alt="" />
        </div>

    </StylesNav>
    {MenuOpen && (
      <StylesMenuBurger>
        <StylesNavCloseBtn>
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <div className={menuBurgerClass} onClick={ () => handleMenuClick()}>
            <img src={imagesIcons(`./icon-close.svg`)} alt="x" />
          </div>
        </StylesNavCloseBtn>
        <ul >
          {links.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              {item.name}
            </li>
          ))}
        </ul>
      </StylesMenuBurger>
    )}

    </>
  );
}

export default Navbar;
