import React from 'react';
import images from '../../utils/images';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='footer-wrapper container'>
        <div>
          <img src={images.logoFooter} alt='logo' />
        </div>
        <div>
          <h4>Doormat Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>12345 Example Rd</li>
            <li>(012)345-6789</li>
            <li>example@example.com</li>
          </ul>
        </div>
        <div>
          <h4>Social Media Links</h4>
          <ul>
            <li>12345 Example Rd</li>
            <li>(012)345-6789</li>
            <li>example@example.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
