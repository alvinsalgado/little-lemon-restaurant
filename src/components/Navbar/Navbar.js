import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import images from '../../utils/images';
import { links } from '../../utils/data';
import './Navbar.scss';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar container'>
      <img src={images.logo} alt='logo' />
      <ul className='navbar-desktop-links '>
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <NavLink to={url}>{text}</NavLink>
            </li>
          );
        })}
      </ul>

      <button className='hamburger' onClick={() => setToggleMenu(!toggleMenu)}>
        <img src={images.hamburger} alt='hamburger' />
      </button>

      {toggleMenu && (
        <ul className='navbar-mobile'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  to={url}
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
