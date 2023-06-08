import React, { useState, useEffect } from 'react';
import '../Center/Feed.css'
import Header from '../Header/Header'

import './SignInUp.css'


const SignInUpForm = ({handleSignUp}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    if (inputName.length <= 20) {
      setName(inputName);
    }
    console.log(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);

  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    console.log(e.target.value);

  };

  const handleSubmit = (e) => {

    console.log("I'm here");
    console.log(name, email, password);

    e.preventDefault();
    handleSignUp(name, email, password);
    // Perform form submission logic here 
  };

  useEffect(() => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isNameValid = name.trim() !== '';
    const isPasswordValid = password.length >= 6;
    const isConfirmPasswordValid = password === confirmPassword;

    setIsFormValid(isEmailValid && isNameValid && isPasswordValid && isConfirmPasswordValid);
  }, [name, email, password, confirmPassword]);
  
  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }, []);

  
  return (
    <div className="feed">
      {/* Header */}
      <Header text="Sign Up"/>

      <div className="SignInUp__container">
          
        <form onSubmit={handleSubmit}>
          <h5>Name</h5>
          <input type="text" value={name} maxLength={20} onChange={handleNameChange} required />

          <h5>E-mail</h5>
          <input type="email" value={email}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={handleEmailChange} required />

          <h5>Password</h5>
          <input type="password" value={password} onChange={handlePasswordChange} minLength={6} required />

          <h5>Confirm Password</h5>
          <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} minLength={6} required />

          <button type="submit" className="SignInUp__signInButton" disabled={!isFormValid}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInUpForm;
