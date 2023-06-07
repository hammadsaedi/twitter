import React, { useState } from 'react';
import './Sidebar.css'
import SidebarOption from './SidebarOption'

import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import DraftsIcon from '@mui/icons-material/Drafts';
import PersonIcon from '@mui/icons-material/Person';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar({handleClick, handleTweet, handleLogout, login}) {
  const [activeOption, setActiveOption] = useState("Home");

  const handleOptionClick = (text) => {
    console.log('Selected Option:', text, ' FROM Sidebar.js');
    handleClick(text);
    setActiveOption(text);
  };
  
  const handleTweetClick = (text) => {
    console.log('Selected Option: Tweeting....', text, ' FROM Sidebar.js');
    handleTweet();

  };

  const handleLogoutClick = (text) => {
    console.log('Selected Option:', text, ' FROM Sidebar.js');
    handleLogout();
  };

  return (
    <div className='Sidebar'>
        {/* Twitter Icon */}
        <TwitterIcon className='twitterIcon' />
        
        {/* Home */}
        <SidebarOption active={activeOption === "Home"} text="Home" Icon={HomeIcon}  onClick={() => handleOptionClick("Home")} />

        {/* Explore */}
        {/* <SidebarOption active={activeOption === 'Explore'} text='Explore' Icon={TravelExploreIcon} onClick={() => handleOptionClick('Explore')} /> */}

        {/* Notifications */}
        {/* <SidebarOption active={activeOption === 'Notifications'}  text='Notifications' Icon={NotificationsIcon} onClick={() => handleOptionClick('Notifications')}  /> */}

        {/* Bookmark */}
        {
          login &&
          <SidebarOption active={activeOption === 'Bookmarks'} text='Bookmarks' Icon={BookmarksIcon} onClick={() => handleOptionClick('Bookmarks')} />

        }

        {/* Draft */}
        {
          login &&
            <SidebarOption active={activeOption === 'States'} text='States' Icon={DraftsIcon} onClick={() => handleOptionClick('States')} />
        }

        {/* Profile */} {
          login &&
          <SidebarOption active={activeOption === 'Profile'} text='Profile' Icon={PersonIcon}  onClick={() => handleOptionClick('Profile')}/>
        }

        {/* Social */}
        {
          login &&
           <SidebarOption active={activeOption === 'Social'}  text='Social' Icon={ConnectWithoutContactIcon}  onClick={() => handleOptionClick('Social')}/>    
        }
        
        {/* Account */} 
        {
          login &&
          <SidebarOption active={activeOption === 'Account'} text='Account' Icon={ManageAccountsIcon} onClick={() => handleOptionClick('Account')}/>
        }

        {/* Button -> Logout */}
        {
          login &&
          <SidebarOption text='Logout' Icon={LogoutIcon} onClick={() => handleLogoutClick('Logout')} />
        }
        
        {
          !login &&
          <SidebarOption text='Sign In' Icon={LogoutIcon} onClick={() => handleOptionClick('SignIn')} />
        }

        {
          !login &&
          <SidebarOption text='Sign Up' Icon={LogoutIcon} onClick={() => handleOptionClick('SignUp')} />
        }
        {/* Button -> Tweet */}
        {
          login &&
          <Button variant='outlined' className='sidebar__tweet' fullWidth onClick={() => handleTweetClick('Tweet')}>Tweet</Button>
        }
    </div>
  )
}
