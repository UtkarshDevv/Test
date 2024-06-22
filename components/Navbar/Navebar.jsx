import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import navBgVideo from '../../assets/nav-bg-img.mp4';
import SignupForm from '../SignupForm';
function Navebar() {
  const [username, setUsername] = useState('');

  const handleSignup = (username) => {
    setUsername(username);
  };

  return (
    <div className='Nav-container'>
      <div className='Nav'>
        <div className='Nav-logo'>Bhumi Homestay</div>
        <div className='Nav-items'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/package">Package</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className='lgn-btn'>
          {username ? (
            <div id='login-btn'>{username.charAt(0).toUpperCase()}</div>
          ) : (
            <button id='login-btn' onClick={() => document.querySelector('.signup-form').classList.toggle('show')}>
              Signup
            </button>
          )}
        </div>
      </div>
      <div className='Nav-bg'>
        <video className='Nav-bg-video' autoPlay loop muted playsInline>
          <source src={navBgVideo} type='video/mp4' />
        </video>
      </div>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
}

export default Navebar;
