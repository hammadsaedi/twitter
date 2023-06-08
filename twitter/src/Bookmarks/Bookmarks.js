import {React, useState, useEffect} from 'react'
import '../Center/Feed.css'
import Header from '../Header/Header'
import Tweet from '../Center/Tweet/Tweet';

export default function Bookmarks({userName}) {

  const [activeOption, setActiveOption] = useState('Category');
  const [tweets, setTweets] = useState([]);

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };

  useEffect(() => {
    // Fetch tweets from the database using an API call
    fetchTweetsFromDatabase()
    .then((data) => {
      setTweets(data);
    })
    .catch((error) => {
      console.log('Error fetching tweets:', error);
    });
  }, []);

  const getUSerId = (username) => {
    return 101;
  }

  const user_id = getUSerId(userName);

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
      bookmarked_by: [101, 306],
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
      bookmarked_by: [101, 306],
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
        { id: 101, bool: true },
        { id: 306, bool: true },
      ],
      bookmarked_by: [102, 306],
      retweeted_by: [],
      quoted_tweet: null,
      thread_parent: null,
      status: 'draft',
    },
    {
      _id: 4,
      user_id: 104,
      content: 'Happy Friday everyone!',
      timestamp: '2023-06-07T13:30:00Z',
      likedby: [201, 209],
      votedby: [
        { id: 307, bool: true },
        { id: 308, bool: true },
      ],
      bookmarked_by: [102, 306],
      retweeted_by: [101, 102],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
    {
      _id: 5,
      user_id: 105,
      content: 'Just finished reading a great book. Highly recommended!',
      timestamp: '2023-06-07T14:45:00Z',
      likedby: [210, 211, 212],
      votedby: [
        { id: 309, bool: true },
        { id: 310, bool: false },
      ],
      bookmarked_by: [102, 306],
      retweeted_by: [],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
    {
      _id: 6,
      user_id: 106,
      content: 'Excited to launch my new website!',
      timestamp: '2023-06-07T15:20:00Z',
      likedby: [213, 214],
      votedby: [
        { id: 311, bool: false },
        { id: 312, bool: false },
      ],
      bookmarked_by: [102, 306],
      retweeted_by: [103],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
    {
      _id: 7,
      user_id: 107,
      content: 'Had a productive meeting with the team. Making great progress!',
      timestamp: '2023-06-07T16:05:00Z',
      likedby: [215, 216, 217],
      votedby: [
        { id: 313, bool: true },
        { id: 314, bool: true },
      ],
      bookmarked_by: [102, 306],
      retweeted_by: [],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
    {
      _id: 8,
      user_id: 108,
      content: 'Looking forward to the weekend getaway!',
      timestamp: '2023-06-07T17:40:00Z',
      likedby: [218, 219],
      votedby: [
        { id: 315, bool: true },
        { id: 316, bool: false },
      ],
      bookmarked_by: [102, 306],
      retweeted_by: [],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
    {
      _id: 9,
      user_id: 109,
      content: 'Just finished a challenging coding project. Feels good!',
      timestamp: '2023-06-07T18:55:00Z',
      likedby: [220, 221, 222],
      votedby: [
        { id: 317, bool: false },
        { id: 318, bool: false },
      ],
      bookmarked_by: [101, 306],
      retweeted_by: [104, 105],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
    {
      _id: 10,
      user_id: 110,
      content: 'Just watched an amazing movie. Must see!',
      timestamp: '2023-06-07T19:25:00Z',
      likedby: [223, 224, 225],
      votedby: [
        { id: 319, bool: true },
        { id: 320, bool: true },
      ],
      bookmarked_by: [102, 306],
      retweeted_by: [106],
      quoted_tweet: null,
      thread_parent: null,
      status: 'posted',
    },
  ];

  // tweets which are bookmarked by the user logged in

  const fetchTweetsFromDatabase = async () => {
    try {
      const data = fetchTweet(getUSerId(userName));
      return data;
    } catch (error) {
      throw new Error('Failed to fetch tweets from the database.');
    }
  };

  const fetchTweet = (user_id) => {
    const bookmarkedTweets = dummyTweets.filter((tweet) => {
      return tweet.bookmarked_by.includes(user_id);
    });

    return bookmarkedTweets;
  };


  
  return (
    <div className="feed">
        {/* Header */}
        <Header text="Bookmarks"/>
          {/* Render the fetched tweets */}
          {tweets.map((tweet) => (
            <Tweet loggedInUserid={user_id} tweet={tweet} />
        ))}
    </div>
  )
}
