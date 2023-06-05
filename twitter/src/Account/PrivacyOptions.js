// Import React and React hooks
import React, { useState } from 'react';
import {Button} from '@mui/material';
import Selection from './Selection';
import Dropdown from './Dropdown';
import './Options.css';

// Define the PrivacySettings component
export default function PrivacySettings(){
  const [privacyOption, setPrivacyOption] = useState('Public');
  const [circleOption, setCircleOption] = useState('');
  const [userOption, setUserOption] = useState('');

  // Handle changes in privacy option
  const handlePrivacyOptionChange = (event) => {
    setPrivacyOption(event.target.value);
  };

  // Handle changes in circle option
  const handleCircleOptionChange = (event) => {
    setCircleOption(event.target.value);
  };

  // Handle changes in user option
  const handleUserOptionChange = (event) => {
    setUserOption(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Privacy Option:', privacyOption);
    console.log('Circle Option:', circleOption);
    console.log('User Option:', userOption);
  };

  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    // Add more user objects here
  ];

  const circles = [
    { id: 1, name: "Friends" },
    { id: 2, name: "Family" },
    { id: 3, name: "Colleagues" },
    // Add more circle objects here
  ];
  
  
  let CircleSelector = <Dropdown name="Circle" options={circles} option={circleOption} handleOptionChange={handleCircleOptionChange}/>;
  let UserSelector = <Dropdown name="User" options={users} option={userOption} handleOptionChange={handleUserOptionChange}/>;

  return (
    <div className="option-container">
      <form onSubmit={handleSubmit}>
        <Selection className="option" name="Public" option={privacyOption} handleOptionChange={handlePrivacyOptionChange}/>
        <Selection className="option"  name="Followers" option={privacyOption} handleOptionChange={handlePrivacyOptionChange}/>
        <Selection className="option"  name="Circle" dropdown={CircleSelector} option={privacyOption} handleOptionChange={handlePrivacyOptionChange}/>
        <Selection className="option"  name="User" dropdown={UserSelector} option={privacyOption} handleOptionChange={handlePrivacyOptionChange}/>

        <Button type="submit" className="tweetBox__tweetButton">Save</Button>
      </form>
    </div>
  );
};