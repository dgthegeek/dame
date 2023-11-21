import React, { useState } from 'react';
import './inscription.css';
import database from '../database.json'

const Inscription = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Assume you have imported the users data from the JSON file
    const database = require('../database.json');

    // Check if the username already exists
    if (database.users.some((user) => user.username === username)) {
      console.log('Username already exists. Please choose another username.');
      // Add your logic for handling duplicate username
      return;
    }



    // Add the new user to the JSON file
    const newUser = {
      username,
      password,
    };
    database.users.push(newUser);

    // Log the updated users data (for demonstration purposes)
    console.log('Updated Users Data:', database);

    // Add your logic for saving the updated users data (e.g., write to a file or send to a server)
    // For a production environment, you should use server-side logic to handle user registration.

    console.log('User registered successfully:', newUser);
}

  return (
    <div className="instagram-signup">
      <div className="signup-container">
        <h1>S'inscrire</h1>
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
          Tu as dja un compte? <a href="/">Se connecter</a>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
