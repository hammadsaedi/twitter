import {React, useState} from 'react'
import '../Center/Feed.css'
import Header from '../Header/Header'
import HeaderOption from '../Header/HeaderOption'
import Tweet from '../Center/Tweet/Tweet';


import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function States() {
  const [activeOption, setActiveOption] = useState('Category');

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };

  let option1 = <HeaderOption text="Drafts" Icon={FeaturedPlayListIcon} />;
  let option2 = <HeaderOption text="Scheduled" Icon={PeopleIcon} />;
  let option3 = <HeaderOption text="Deleted" Icon={Diversity1Icon} />;
  return (
    <div className="feed">
        {/* Header */}
        <Header text="States" options={[option1, option2, option3]} handleOptionClick={handleOptionClick}/>

        <Tweet text="Hello World!"/>
        <Tweet text="@elonmusk who?"/>
        <Tweet text="#MuskHub"/>
        <Tweet text="کیا مجھے پیار ہے؟"/>
    </div>
  )
}
