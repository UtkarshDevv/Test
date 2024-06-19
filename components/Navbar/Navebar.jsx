import React from 'react';
import './navbar.css';
import navBgVideo from '../../assets/nav-bg-img.mp4';

function Navebar() {
  return (
    <div className='Nav-container'>
      <div className='Nav'>
        <div className='Nav-logo'>Bhumi Homestay</div>
        <div className='Nav-items'>
          <ul>
            <li>Home</li>
            <li>Package</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='lgn-btn'>
          <button id='login-btn'>Signup</button>
        </div>
      </div>
      <div className='Nav-bg'>
        <video className='Nav-bg-video' autoPlay loop muted playsInline>
          <source src={navBgVideo} type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default Navebar;
