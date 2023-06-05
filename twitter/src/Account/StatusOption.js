// Import React and React hooks
import React, { useState } from 'react';
import {Button} from '@mui/material';
import Selection from './Selection';
import './Options.css';

// Define the PrivacySettings component
export default function StatusSetting(){
    const [accountStatus, setAccountStatus] = useState('Activate');
    
    const handleAccountStatusChange = (event) => {
        setAccountStatus(event.target.value);
    };

    const accountActivationsChange = (event) =>{
        setAccountStatus(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Account Status:', accountStatus);
    };

    return (
        <div className="option-container">
        <form onSubmit={handleSubmit}>
            <Selection className="option" name="Activate" option={accountStatus} handleOptionChange={handleAccountStatusChange}/>
            <Selection className="option"  name="Deactivate" option={accountStatus} handleOptionChange={handleAccountStatusChange}/>
            <Selection className="option"  name="Ghost" option={accountStatus} handleOptionChange={handleAccountStatusChange}/>
            <Selection className="option"  name="Delete" option={accountStatus} handleOptionChange={handleAccountStatusChange}/>

            <Button type="submit" className="tweetBox__tweetButton">Save</Button>
        </form>
        </div>
    );
};