import React, { useState, useEffect } from 'react';
import './Feed.css';
import Header from '../Header/Header';
import HeaderOption from '../Header/HeaderOption';
import TweetBox from './TweetBox/TweetBox';
import Tweet from './Tweet/Tweet';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Feed({user_id, filter }) {
  const [activeOption, setActiveOption] = useState('For You');
  const [tweets, setTweets] = useState([]);

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };

  const dummyTweets = [
    {
      _id: 1,
      user_id: 101,
      content: 'Hello world!',
      timestamp: '2023-06-07T10:30:00Z',
      likedby: [201, 202, 203],
      votedby: [
        { id: 301, bool: true },
        { id: 302, bool: false },
      ],
      bookmarked_by: [
        { id: 305, bool: false },
        { id: 306, bool: false },
      ],
      retweeted_by: [],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
    {
      _id: 2,
      user_id: 102,
      content: 'Just posted a new blog article. Check it out!',
      timestamp: '2023-06-07T11:15:00Z',
      likedby: [204, 205],
      votedby: [
        { id: 303, bool: true },
        { id: 304, bool: true },
      ],
      bookmarked_by: [
        { id: 305, bool: false },
        { id: 306, bool: false },
      ],
      retweeted_by: [101],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
    {
      _id: 3,
      user_id: 103,
      content: 'I am working on a new project. Excited!',
      timestamp: '2023-06-07T12:00:00Z',
      likedby: [101, 207, 208],
      votedby: [
        { id: 305, bool: false },
        { id: 306, bool: false },
      ],
      bookmarked_by: [
        { id: 305, bool: false },
        { id: 306, bool: false },
      ],
      retweeted_by: [],
      quoted_tweet: null,
      thread_parent: null,
      status: 'draft',
    },
  ];
  
  useEffect(() => {
    
    fetchTweetsFromDatabase()
      .then((data) => {
        setTweets(data);
      })
      .catch((error) => {
        console.log('Error fetching tweets:', error);
      });
  }, []);

const fetchTweetsFromDatabase = async () => {
  try {
    const response = await fetch('http://localhost:8080/demo');
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch tweets from the database.');
  }
};


  return (
    <div className="feed">
      {/* Header */}
      <Header text={filter} options={[option1, option2, option3]} handleOptionClick={handleOptionClick} />

      {/* TweetBox */}
      <TweetBox />

        {/* Post */}
         {/* Render the fetched tweets */}
        {tweets.map((tweet) => (
          <Tweet loggedInUserid={user_id} tweet={tweet} />
        ))}
    </div>
  );
}