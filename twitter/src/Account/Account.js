import {React, useState, useEffect} from 'react'
import '../Center/Feed.css'
import Header from '../Header/Header'
import HeaderOption from '../Header/HeaderOption'
import PrivacySettings from './PrivacyOptions'
import StatusSetting from './StatusOption'

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Account() {
  const [activeOption, setActiveOption] = useState('Credentials');

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };

  let option1 = <HeaderOption text="Credentials" Icon={FeaturedPlayListIcon} handleOptionClick={handleOptionClick}/>;
  let option2 = <HeaderOption text="Status" Icon={PeopleIcon} handleOptionClick={handleOptionClick}/>;
  let option3 = <HeaderOption text="Privacy" Icon={Diversity1Icon} handleOptionClick={handleOptionClick}/>;


  return (
    <div className="feed">
        {/* Header */}
        <Header text="Account" options={[option1, option2, option3]} handleOptionClick={handleOptionClick}/>
        { activeOption === 'Credentials' && <h1>Credentials</h1>}
        { activeOption === 'Privacy' && <PrivacySettings/>}
        { activeOption === 'Status' && <StatusSetting/>}

        {/* <PrivacySettings/> */}
    </div>
  )
}
