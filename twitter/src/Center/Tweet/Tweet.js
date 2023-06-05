import React from 'react';

import TweetOption from './TweetOption';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Avatar, IconButton } from '@mui/material';

import './Tweet.css'; // Import CSS file for styling

export default function Tweet({text}) {

  const formatText = (text) => {
    // Regular expression to match "@" followed by any word characters (\w+)
    const mentionRegex = /@(\w+)/g;
    // Regular expression to match "#" followed by any word characters (\w+)
    const hashtagRegex = /#(\w+)/g;

    // Replace mentions with styled links
    const formattedText = text.replace(mentionRegex, '<a href="/profile/$1">@$1</a>');
    // Replace hashtags with styled links
    const finalText = formattedText.replace(hashtagRegex, '<a href="/hashtag/$1">#$1</a>');

    return finalText;
  };

  return (
    <div className="tweet-post">
      <div className="tweet-header">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        <div className="tweet-info">
          <div className='tweet-info-author'> 
            <h4 className="tweet-name">Hammad Saeedi</h4>
            <p className="tweet-username">@hammadsaedi</p>
          </div>          

          <p className="tweet-time">12m ago</p>
        </div>

        <IconButton className="tweet-options" aria-label="More options">
          <MoreHorizIcon />
        </IconButton>
      </div>
      
      <div className="tweet-content">
        <p dangerouslySetInnerHTML={{ __html: formatText(text) }}>
        </p>
      </div>
      <div className="tweet-actions">
        <TweetOption Icon={FavoriteBorderOutlinedIcon} count={10}/>
        <TweetOption Icon={ThumbUpIcon} count={5}/>
        <TweetOption Icon={ThumbDownIcon} count={2}/>
        <TweetOption Icon={RepeatIcon} count={3}/>
        <TweetOption Icon={ChatBubbleOutlineIcon} count={7}/>
        <TweetOption Icon={BookmarkBorderIcon} count={1}/>
      </div>
    </div>
  );
};