import React, { useState, useEffect } from 'react';
import './SignupForm.css';

function SignupForm({ onSignup, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  // Load username from localStorage if available
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save username to localStorage
    localStorage.setItem('username', username);

    // Handle form submission logic here (e.g., send data to server)
    // For demo purposes, log the username and email
    console.log(`Signup submitted with username: ${username} and email: ${email}`);

    // Notify parent component about signup
    onSignup(username);

    // Close the form after submission
    onClose();
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <button className="close-button" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Signup {username && `as ${username}`}</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
