import {React, useState, useEffect}  from 'react';

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

// Counter is not working properly
export default function Tweet({loggedInUserid, tweet}) { 
  const { _id, user_id, content, timestamp, likedby, votedby, retweeted_by, bookmarked_by , quoted_tweet, thread_parent, status } = tweet;
  
  const [likedByLoggedUser, setLikedByLoggedUser] = useState(loggedInUserid ? likedby.includes(loggedInUserid) : false);
  // const [upvotedByLoggedUser, setUpvotedByLoggedUser] = useState(loggedInUserid ? votedby.some((vote) => vote.id === loggedInUserid && vote.bool === true) : false);
  // const [downvotedByLoggedUser, setDownvotedByLoggedUser] = useState(loggedInUserid ? votedby.some((vote) => vote.id === loggedInUserid && vote.bool === false) : false);
  const [retweetedByLoggedUser, setRetweetedByLoggedUser] = useState(loggedInUserid ? retweeted_by.includes(loggedInUserid) : false);
  const [bookmarkedByLoggedUser, setBookmarkedByLoggedUser] = useState(loggedInUserid ? bookmarked_by.includes(loggedInUserid) : false);

  const [upvotedByLoggedUser, setUpvotedByLoggedUser] = useState(
    loggedInUserid
      ? votedby.some((vote) => vote.id === loggedInUserid && vote.bool === true)
      : false
  );

  const [downvotedByLoggedUser, setDownvotedByLoggedUser] = useState(
    loggedInUserid
      ? votedby.some((vote) => vote.id === loggedInUserid && vote.bool === false)
      : false
  );

  // Get user data from database via user_id
  const getUSerData = (user_id) => {
    const  user = {
      authorUsername: 'hammadsaedi',
      authorName: 'Hammad Saeedi',
    }
    return user;
  }

  const {authorUsername, authorName} = getUSerData(user_id);

  const formattedTimestamp = new Date(timestamp).toLocaleString();

  const likeCount = likedby ? likedby.length : 0;
  const upvoteCount = votedby ? votedby.filter((vote) => vote.bool === true).length : 0; // Fix: Filter votes with bool === true
  const downvoteCount = votedby ? votedby.filter((vote) => vote.bool === false).length : 0; // Fix: Filter votes with bool === false
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

  // if markedByUSer is true, then remove the user from the array
  // if markedByUSer is false, then add the user to the array
  const handleOptionClick = (type, markedByUSer) => { // type: like, upvote, downvote, retweet, comment, bookmark
    if(type === 'like') {
      setLikedByLoggedUser(!markedByUSer);
      // update database
    } else if (type === 'upvote') {
      // Toggle upvote status
      setUpvotedByLoggedUser(!upvotedByLoggedUser);
      setDownvotedByLoggedUser(false); // Reset the downvote status
    } else if (type === 'downvote') {
      // Toggle downvote status
      setDownvotedByLoggedUser(!downvotedByLoggedUser);
      setUpvotedByLoggedUser(false); // Reset the upvote status
    } else if(type === 'retweet') {
      setRetweetedByLoggedUser(!markedByUSer);
      // update database
    } else if(type === 'bookmark') {
      setBookmarkedByLoggedUser(!markedByUSer);
      // update database
    }
    console.log('Option Clicked:', markedByUSer, type);
    console.log('User:', loggedInUserid);
    console.log(loggedInUserid ? likedby.includes(loggedInUserid) : false);
  };

  // useEffect(() => {
  // }, []);

  return (
    <div className="tweet-post">
      <div className="tweet-header">
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        <div className="tweet-info">
          <div className='tweet-info-author'> 
            <h4 className="tweet-name">{authorName}</h4>
            <p className="tweet-username">@{authorUsername}</p>
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
        {/* Like */}
        <TweetOption
          type="like"
          markedByUser={likedByLoggedUser} // Corrected prop name
          handleOptionClick={handleOptionClick}
          Icon={FavoriteBorderOutlinedIcon}
          count={likeCount}
        />
        {/* Upvote */}
        <TweetOption
          type="upvote"
          markedByUser={upvotedByLoggedUser}
          handleOptionClick={handleOptionClick}
          Icon={ThumbUpIcon}
          count={upvoteCount}
        />
        {/* DownVote */}
        <TweetOption
          type="downvote"
          markedByUser={downvotedByLoggedUser}
          handleOptionClick={handleOptionClick}
          Icon={ThumbDownIcon}
          count={downvoteCount}
        />
        {/* Retweet */}
        <TweetOption
          type="retweet"
          markedByUser={retweetedByLoggedUser}
          handleOptionClick={handleOptionClick}
          Icon={RepeatIcon}
          count={retweetCount}
        />
        {/* Bookmark */}
        <TweetOption
          type="bookmark"
          markedByUser={bookmarkedByLoggedUser}
          handleOptionClick={handleOptionClick}
          Icon={BookmarkBorderIcon}
          count={bookedCount}
        />
      </div>
    </div>
  );
};