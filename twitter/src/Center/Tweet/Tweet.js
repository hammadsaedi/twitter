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

export default function Tweet({tweet}) {
  const { _id, user_id, content, timestamp, likedby, votedby, retweeted_by, bookmarked_by , quoted_tweet, thread_parent, status } = tweet;

  const getUSerData = (user_id) => {
    const  user = {
      username: 'hammadsaedi',
      name: 'Hammad Saeedi',
    }
    return user;
  }

  const {username, name} = getUSerData(user_id);

  const formattedTimestamp = new Date(timestamp).toLocaleString();
  // const [date, time] = formattedTimestamp.split(', ');

  const likeCount = likedby ? likedby.length : 0;
  const upvoteCount = votedby ? votedby.filter((vote) => vote.bool).length : 0;
  const downvoteCount = votedby ? votedby.filter((vote) => !vote.bool).length : 0;
  const retweetCount = retweeted_by ? retweeted_by.length : 0;
  const bookedCount = bookmarked_by ? bookmarked_by.length : 0;




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
            <h4 className="tweet-name">{name}</h4>
            <p className="tweet-username">@{username}</p>
          </div>          

          <p className="tweet-time">{formattedTimestamp}</p>
        </div>

        <IconButton className="tweet-options" aria-label="More options">
          <MoreHorizIcon />
        </IconButton>
      </div>
      
      <div className="tweet-content">
        <p dangerouslySetInnerHTML={{ __html: formatText(content) }}>
        </p>
      </div>
      <div className="tweet-actions">
        <TweetOption Icon={FavoriteBorderOutlinedIcon} count={likeCount}/>
        <TweetOption Icon={ThumbUpIcon} count={(upvoteCount).length}/>
        <TweetOption Icon={ThumbDownIcon} count={(downvoteCount).length}/>
        <TweetOption Icon={RepeatIcon} count={retweetCount}/>
        <TweetOption Icon={ChatBubbleOutlineIcon} count={7}/>
        <TweetOption Icon={BookmarkBorderIcon} count={bookedCount}/>
      </div>
    </div>
  );
};