import {React, useState} from 'react'
import '../Center/Feed.css'
import './Profile.css'

import Header from '../Header/Header'
import Tweet from '../Center/Tweet/Tweet';
// import HeaderPic from './HeaderPic';
// import ProfilePic from './ProfilePic';

import { Button } from '@mui/material';

import OptionPane from './OptionPane'

import HeaderOption from '../Header/HeaderOption'


import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Profile({user}) {
  const {_id, username, name, dob, email, bio} = user;
  const [activeOption, setActiveOption] = useState('Category');

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };

  let option1 = <HeaderOption text="Tweets" Icon={FeaturedPlayListIcon} />;
  let option2 = <HeaderOption text="Like" Icon={PeopleIcon} />;
  let option3 = <HeaderOption text="Vote" Icon={Diversity1Icon} />;
  return (
    <div className="feed">
        {/* Header */}
        <Header text="Profile" activeOption={activeOption} handleOptionClick={handleOptionClick} />
        <div className="header-wrapper">
          
          {/* <HeaderPic /> */}
          {/* <div className="profile-pic-wrapper">
            <ProfilePic profileImage="https://pbs.twimg.com/profile_banners/1134318664818102272/1625643519/600x200" />
          </div>
          <div className="edit-profile-button-wrapper">
            <Button variant="outlined" className="edit-profile-button" fullWidth>
              Edit Profile
            </Button>
          </div> */}
          <div>
            <p className='profile_name'>{name}</p>
            <p className='profile_name'>@{username}</p>
          </div>
          <p><strong>Date of Birth:</strong> {dob}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Bio:</strong> {bio}</p>
        </div>

        <OptionPane options={[option1, option2, option3]} className="optionPane" handleOptionClick={handleOptionClick}/>
        
    </div>
  )
}
