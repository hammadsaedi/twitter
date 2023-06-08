import React from 'react'
import { useState } from "react";

import TweetBoxOption from './TweetBoxOption';

import './TweetBox.css'

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import {Avatar, Button} from '@mui/material';

export default function TweetBox() {
    const [tweetText, setTweetText] = useState('');
    // const [tweets, setTweet] = useState([]);

    const handleChange = (e) => {
      setTweetText(e.target.value);
    };

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:8080/Twitter', {
        method: 'POST',

        // body: JSON.stringify({ name, email, password }),

        body: JSON.stringify({ tweetText,  tweetText}), // Include the tweetText value in the request body
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    };
  
    // const getTweet = async ()=>{
    //   const response = await fetch('http://localhost:8080/Twitter',{
    //     method:'GET',
    //   })
    //  const data = await response.json();
    //  setTweet(data);
    // }

    const autoExpand = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const isExceeded = tweetText.length > 140;
    
  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <textarea  placeholder="What's happening?" type="text" value={tweetText} onChange={handleChange} onInput={(e) => autoExpand(e.target)} rows="1"></textarea>
        </div>
        <div className='tweetBoxAction'>
            <div className='tweetBoxOptions'>
                <TweetBoxOption Icon={AddPhotoAlternateOutlinedIcon} className='AddMediaOption'/>
                <TweetBoxOption Icon={EmojiEmotionsOutlinedIcon} className='AddEmojiOption'/>
                <TweetBoxOption Icon={AddLocationAltOutlinedIcon} className='AddLocationOption'/>
                <TweetBoxOption Icon={ScheduleSendOutlinedIcon} className='ScheduleTweet'/>
                <TweetBoxOption Icon={SaveAsOutlinedIcon} className='SaveAsDraft'/>
                <span className="char-count">{140 - tweetText.length}</span>
            </div>
            <Button type="submit" className="tweetBox__tweetButton" disabled={isExceeded}>
            Tweet
            </Button>
            
        </div>
      </form>
    </div>
  )
}