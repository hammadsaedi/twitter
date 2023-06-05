import React, {useState} from 'react';

import './App.css';
import Sidebar from './Sidebar/Sidebar';

import Feed from './Center/Feed';
import Widgets from './Widgets/Widgets';
import TweetBox from './Center/TweetBox/TweetBox';
import Social from './Social/Social';
import Account from './Account/Account';
import States from './States/States';
import Bookmarks from './Bookmarks/Bookmarks';
import Explore from './Explore/Explore';
import Notifications from './Notifications/Notifications';
import Profile from './Profile/Profile';
function App() {
  const [activeOption, setActiveOption] = useState("Home");

  const [tweetPopup, setTweetPopup] = useState(false);

  const [logoutPopup, setLogoutPopup] = useState(false);

  const [HashTag, setHashTag] = useState("#Twitter");


  const handleOption = (option) => {
    // updateOpt(option);
    setActiveOption(option);
    console.log('Selected Option:', option, ' FROM App.js');
  };

  // const updateOpt = (option) => {
  //   if (option === "Home") {
  //     setActiveOption('Home');
  //   } else if (option === "Explore") {
  //     setActiveOption('Explore');
  //   } else if (option === "Notifications") {
  //     setActiveOption('Notifications');
  //   } else if (option === "Bookmarks") {
  //     setActiveOption('Bookmarks');
  //   } else if (option === "States") {
  //     setActiveOption('States');
  //   } else if (option === "Social") { 
  //     setActiveOption('Social');
  //   } else if (option === "Profile") {
  //     setActiveOption('Profile');
  //   } else if (option === "Account") {
  //     setActiveOption('Account');
  //   } else {
  //     console.log('Error: No Option Selected');
  //   }
  // };

  const handleTweet = () => {
    setTweetPopup(!tweetPopup);
    console.log('Tweeting....');
  };

  const handleLogout = () => {
    setLogoutPopup(!logoutPopup);
    console.log('Tweeting....');
  };

  const handleHashTag = (tag) => {  
    setHashTag(tag);
    console.log('Selected HashTag:', tag, ' FROM App.js');
  };

  return (
    <div className='App'>
      
      {tweetPopup && (
        <>
          <div className="overlay" onClick={handleTweet}></div>
          <dialog className="popup" open>
            <TweetBox className="TweetBox"/>
            <button className="close-button" onClick={handleTweet}>
              Close
            </button>
          </dialog>
        </>
      )}


      {logoutPopup && (
        <>
          <div className="overlay logoutOverlay" onClick={handleLogout}></div>
          <dialog className="popup logout" open>
            <p>Are you sure you want to logout?</p>
            <button className="close-button" onClick={handleLogout}>
              Cancel
            </button>
            <button className="close-button" onClick={handleLogout}>
              Logout
            </button>
          </dialog>
        </>
      )}

      {/* Sidebar */}
      <Sidebar className={`${tweetPopup ? 'blur' : ''}`} handleClick={handleOption} handleTweet={handleTweet} handleLogout={handleLogout}/>

      {/* Feed */}
      {activeOption === "Home" &&
        <Feed filter = {"Home"} className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* Explore */}
      {activeOption === "Explore" &&  
        <Explore className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* Notifications */}
      {activeOption === "Notifications" &&
        <Notifications className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* Bookmarks */}
      {activeOption === "Bookmarks" &&
        <Bookmarks className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* States */}
      {activeOption === "States" &&
        <States className={`${tweetPopup ? 'blur' : ''}`} />  
      }

      {/* Profile */}
      {activeOption === "Profile" &&
        <Profile className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* Social */}
      {activeOption === "Social" &&
        <Social className={`${tweetPopup ? 'blur' : ''}`}/>
      }
      
      {/* Account */}
      {activeOption === "Account" &&
        <Account className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* HashTag */}
      {activeOption === "Hashtag" &&
        <Feed filter = {HashTag} className={`${tweetPopup ? 'blur' : ''}`}/>
      }


      {/* Widgets */}
      <Widgets  className={`${tweetPopup ? 'blur' : ''}`} handleClick={handleOption} handleTrendClick={handleHashTag}/>
    </div>
  );
}

export default App;
