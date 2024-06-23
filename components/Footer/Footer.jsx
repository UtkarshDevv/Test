import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <ul className='social-links'>
          <li>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faInstagram} size='2x' />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFacebook} size='2x' />
            </a>
          </li>
          <li>
            <a href='https://maps.google.com' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGoogle} size='2x' />
            </a>
          </li>
        </ul>
        <h3>          Designed by <a href='https://utkarsh-sinhaa.vercel.app/index.html' target='_blank' rel='noopener noreferrer'>Utkarsh Sinha</a> </h3>
      </div>
    </footer>
  );
}

export default Footer;
