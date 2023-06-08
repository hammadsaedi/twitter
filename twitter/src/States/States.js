import React, { useEffect, useState } from 'react';
import '../Center/Feed.css';
import Header from '../Header/Header';
import HeaderOption from '../Header/HeaderOption';
import Tweet from '../Center/Tweet/Tweet';

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function States({ loggedInUser }) {
  const [activeOption, setActiveOption] = useState('archived');
  const [tweets, setTweets] = useState([]);

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
      bookmarked_by: [101, 102, 103],
      retweeted_by: [],
      quoted_tweet: null,
      thread_parent: null,
      status: 'archived',
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
      bookmarked_by: [101, 104, 103],
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
      bookmarked_by: [101, 104, 103],
      retweeted_by: [],
      quoted_tweet: null,
      thread_parent: null,
      status: 'draft',
    },
  ];

  // useEffect(() => {
  //   fetchTweetsFromDatabase()
  //     .then((data) => {
  //       setTweets(data);
  //     })
  //     .catch((error) => {
  //       console.log('Error fetching tweets:', error);
  //     });
  // }, [activeOption]);

  const handleOptionClick = (text) => {
    setTweets(filterTweets(dummyTweets, text.toLowerCase()));
    setActiveOption(text.toLowerCase());
    console.log(tweets);
  };

  const getUserId = (username) => {
    return 101;
  };

  const user_id = getUserId(loggedInUser);

  const fetchTweetsFromDatabase = async () => {
    try {
      const data = dummyTweets;
      return data;
    } catch (error) {
      throw new Error('Failed to fetch tweets from the database.');
    }
  };

  const filterTweets = (tweets, text) => {
    return tweets.filter((tweet) => tweet.status === "posted");
  };

  let option1 = <HeaderOption text="Drafts" Icon={FeaturedPlayListIcon} />;
  let option2 = <HeaderOption text="Archived" Icon={PeopleIcon} />;
  let option3 = <HeaderOption text="Deleted" Icon={Diversity1Icon} />;

  return (
    <div className="feed">
      <Header text="States" options={[option1, option2, option3]} handleOptionClick={handleOptionClick} />
    </div>
  );
}
