import React, { useState, useEffect } from 'react';
import './Feed.css';
import Header from '../Header/Header';
import HeaderOption from '../Header/HeaderOption';
import TweetBox from './TweetBox/TweetBox';
import Tweet from './Tweet/Tweet';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Feed({ filter }) {
  const [activeOption, setActiveOption] = useState('For You');
  const [tweets, setTweets] = useState([]);

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };

  
  let option1 = <HeaderOption text="For You" Icon={FeaturedPlayListIcon} />;
  let option2 = <HeaderOption text="Following" Icon={PeopleIcon} />;
  let option3 = <HeaderOption text="Circle" Icon={Diversity1Icon} />;

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

      {/* {tweets.map((tweet) => (
        <Tweet key={tweet.id} text={tweet.text} />
      ))} */}
    </div>
  );
}