
import React, { useState } from 'react';
import './home.css';
import database from '../database.json';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const naviguer = useNavigate()

  const handleLogin = () => {
    // Check if the entered username and password match any user in the JSON file
    const user = database.users.find((user) => user.username === username && user.password === password);

    if (user) {
      naviguer('/chat')
    } else {
      console.log('Invalid username or password');
      // Add your logic for failed login (e.g., display an error message)
    }
  };

  return (
    <div className="instagram-login">
      <div className="login-container">
        <h3>ddddd</h3>
        <h2>Welcome to My App</h2>
        <p>You need to log in to start chatting.</p>
        <div className="form-container">
          <form>
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
            <button type="button" onClick={handleLogin}>
                Se connecter
            </button>
          </form>
        </div>
        <div className="or-separator">
          <div className="line"></div>
          <div className="or">OU</div>
          <div className="line"></div>
        </div>
        <div className="signup-link">
          Vous n'avez pas de compte? <a href="/inscription">S'inscrire</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
