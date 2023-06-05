import {React, useState} from 'react'
import '../Center/Feed.css'
import Header from '../Header/Header'
import HeaderOption from '../Header/HeaderOption'

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Social() {
  const [activeOption, setActiveOption] = useState('Category');

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };
  let option1 = <HeaderOption text="Following" Icon={FeaturedPlayListIcon} flag={true} />;
  let option2 = <HeaderOption text="Followers" Icon={PeopleIcon} flag={true} />;
  let option3 = <HeaderOption text="Mutes" Icon={Diversity1Icon} flag={true}/>;
  let option4 = <HeaderOption text="Blocks" Icon={Diversity1Icon} flag={true}/>;
  let option5 = <HeaderOption text="Circle" Icon={Diversity1Icon} flag={true}/>;

  return (
    <div className="feed">
        {/* Header */}
        <Header text="Social" options={[option1, option2, option3, option4, option5]} handleOptionClick={handleOptionClick}/>
      
    </div>
  )
}
