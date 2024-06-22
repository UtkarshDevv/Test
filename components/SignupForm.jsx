import React, { useState, useEffect } from 'react';
import './SignupForm.css';

function SignupForm({ onSignup }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [signedUp, setSignedUp] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Send the form data to Formspree or any other service
      const formData = {
        username,
        email,
      };
  
      // Replace with your Formspree endpoint
      const formspreeEndpoint = 'https://formspree.io/f/xzzpprrb';
  
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          onSignup(username);
          setSignedUp(true);
          setUsername('');
          setEmail('');
        } else {
          console.error('Signup failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    if (signedUp) {
      return (
        <div className="signup-success">
          <p>Signup successful!</p>
          <p>Thank you for signing up, {username}!</p>
        </div>
      );
    }
  
    return (
      <form className='signup-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Signup</button>
      </form>
    );
  }
  
  
  export default SignupForm;