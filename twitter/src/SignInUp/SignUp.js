import React, { useState, useEffect } from 'react';
import '../Center/Feed.css'
import Header from '../Header/Header'

import './SignInUp.css'


const SignInUpForm = ({handleSignUp}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [users, setUsers] = useState([]);

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    if (inputName.length <= 20) {
      setName(inputName);
    }
    // setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   
  //   // Perform form submission logic here 
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSignUp(name, email, password);
    
  };
  
  // const getUser = async ()=>{
  //   const response = await fetch('http://localhost:8080/Twitter',{
  //     method:'GET',
  //   })
  //  const data = await response.json();
  //  setUsers(data);
  // }

  // useEffect(() => {
  //   const isEmailValid = /\S+@\S+\.\S+/.test(email);
  //   const isNameValid = name.trim() !== '';
  //   const isPasswordValid = password.length >= 6;
  //   const isConfirmPasswordValid = password === confirmPassword;
    
  //   setIsFormValid(isEmailValid && isNameValid && isPasswordValid && isConfirmPasswordValid);
  // }, [name, email, password, confirmPassword]);
  
  // useEffect(() => {
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');
  // }, []);

  
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
