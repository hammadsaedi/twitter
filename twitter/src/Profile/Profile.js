import {React, useState} from 'react'
import '../Center/Feed.css'
import './Profile.css'

import Header from '../Header/Header'
import Tweet from '../Center/Tweet/Tweet';
import HeaderPic from './HeaderPic';
import ProfilePic from './ProfilePic';

import { Button } from '@mui/material';

// import HeaderOption from '../Header/HeaderOption'


// import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
// import PeopleIcon from '@mui/icons-material/People';
// import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Profile() {
  const [activeOption, setActiveOption] = useState('Category');

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };

//   let option1 = <HeaderOption text="Bio" Icon={FeaturedPlayListIcon} />;
//   let option2 = <HeaderOption text="Status" Icon={PeopleIcon} />;
//   let option3 = <HeaderOption text="Privacy" Icon={Diversity1Icon} />;
  return (
    <div className="feed">
        {/* Header */}
        <Header text="Profile" activeOption={activeOption} handleOptionClick={handleOptionClick} />
        <div className="header-wrapper">
          <HeaderPic />
          <div className="profile-pic-wrapper">
            <ProfilePic profileImage="https://pbs.twimg.com/profile_banners/1134318664818102272/1625643519/600x200" />
          </div>
          <div className="edit-profile-button-wrapper">
            <Button variant="outlined" className="edit-profile-button" fullWidth>
              Edit Profile
            </Button>
          </div>
        </div>
        
    </div>
  )
}
