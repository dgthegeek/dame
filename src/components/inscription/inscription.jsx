import React, { useState } from 'react';
import './inscription.css';

const Inscription = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Add your signup logic here
    console.log('Signing up with:', { email, username, password });
  };

  return (
    <div className="instagram-signup">
      <div className="signup-container">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="logo"
        />
        <div className="form-container">
          <form>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleSignUp}>
              S'inscrire
            </button>
          </form>
        </div>
        <div className="or-separator">
          <div className="line"></div>
          <div className="or">OR</div>
          <div className="line"></div>
        </div>
        <div className="login-link">
          Tu as deja un compte? <a href="/">Se connecter</a>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
