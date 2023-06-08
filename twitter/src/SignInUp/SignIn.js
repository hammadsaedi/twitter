import React, { useState, useEffect } from 'react';
import '../Center/Feed.css'
import Header from '../Header/Header'

import './SignInUp.css'

const SignInForm = ({handleSignIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSignIn(email, password);
    const response = await fetch('http://localhost:8080/Twitter', {
        method: 'POST',
        body: JSON.stringify({ email, password }), // Include the tweetText value in the request body
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
  };

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    setIsFormValid(isEmailValid);
     
  }, [email]);

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);


  return (
    <div className="feed">
      {/* Header */}
      <Header text="Sign In"/>

      <div className="SignInUp__container">
          <form onSubmit={handleSubmit}>
            <h5>E-mail</h5>
            <input type="email" value={email}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleEmailChange} required />
  
            <h5>Password</h5>
            <input type="password" value={password} onChange={handlePasswordChange} minLength={6} required />

            <button type="submit" className="SignInUp__signInButton" disabled={!isFormValid}>
              Sign In
            </button>
          </form>
      </div>
    </div>
  );
};

export default SignInForm;
