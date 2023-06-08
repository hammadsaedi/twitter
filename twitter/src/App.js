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

import SignInForm from './SignInUp/SignIn';
import SignUpForm from './SignInUp/SignUp';

function App() {
  const [login, setLogin] = useState(true);

  const [userName, setUserName] = useState('101');

  const [activeOption, setActiveOption] = useState("Home");

  const [tweetPopup, setTweetPopup] = useState(false);

  const [logoutPopup, setLogoutPopup] = useState(false);

  const [HashTag, setHashTag] = useState("#Twitter");

  const handleLogin = (email, password) => {
    if (email === 'faoqzuhair@gmail.com' && password === 'admin12345'){
      setUserName("faoqzuhair"); //userID
      setLogin(true);
      setActiveOption("Home");
    } else {
      alert('Invalid Credentials');
    }
    console.log('Logging in....');
  }

  const handleSignUp = async (name, email, password) => {
    // push to database
    console.log('Signing Up....');
    // postDataToEndpoint(data);
    const user = {
      name: name,
      email: email,
      password: password
    };
    
    console.log(name, email, password);

    setLogin(true);
    setActiveOption("Home");
    setUserName(email.split('@')[0]);
  }
  


  
  const handleOption = (option) => {
    // updateOpt(option);
    setActiveOption(option);
    console.log('Selected Option:', option, ' FROM App.js');
  };

  const handleTweet = () => {
    setTweetPopup(!tweetPopup);
    console.log('Tweeting....');
  };

  const handleLogout = () => {
    setLogin(false);
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
      <Sidebar className={`${tweetPopup ? 'blur' : ''}`} login={login} handleClick={handleOption} handleTweet={handleTweet} handleLogout={handleLogout}/>

      {/* Feed */}
      {activeOption === "Home" &&
        <Feed  userName={userName} filter = {"Home"} className={`${tweetPopup ? 'blur' : ''}`}/>
      }
      
      {/* Sign Up */}
      {activeOption === "SignUp" &&
        <SignUpForm handleSignUp={handleSignUp}/>
      }

      {/* Sign In */}
      {activeOption === "SignIn" &&
        <SignInForm handleSignIn={handleLogin}/>
      }

      {/* Explore */}
      {activeOption === "Explore" &&  
        <Explore userName={userName} className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* Notifications */}
      {activeOption === "Notifications" &&
        <Notifications  userName={userName} className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* Bookmarks */}
      {activeOption === "Bookmarks" &&
        <Bookmarks  userName={userName} className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* States */}
      {activeOption === "States" &&
        <States  userName={userName} className={`${tweetPopup ? 'blur' : ''}`} />  
      }

      {/* Profile */}
      {activeOption === "Profile" &&
        <Profile  userName={userName} className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* Social */}
      {activeOption === "Social" &&
        <Social  userName={userName} className={`${tweetPopup ? 'blur' : ''}`}/>
      }
      
      {/* Account */}
      {activeOption === "Account" &&
        <Account  userName={userName} className={`${tweetPopup ? 'blur' : ''}`}/>
      }

      {/* HashTag */}
      {activeOption === "Hashtag" &&
        <Feed  userName={userName} filter = {HashTag} className={`${tweetPopup ? 'blur' : ''}`}/>
      }


      {/* Widgets */}
      <Widgets  className={`${tweetPopup ? 'blur' : ''}`} handleClick={handleOption} handleTrendClick={handleHashTag}/>
    </div>
  );
}

export default App;
