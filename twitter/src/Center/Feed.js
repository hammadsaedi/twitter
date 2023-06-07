import {React, useState} from 'react'
import './Feed.css'
import Header from '../Header/Header'
import HeaderOption from '../Header/HeaderOption'
import TweetBox from './TweetBox/TweetBox';
import Tweet from './Tweet/Tweet';

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Feed({userName, filter}) {
  const [activeOption, setActiveOption] = useState('For You');

  const handleOptionClick = (text) => {
    setActiveOption(text);
  };

  let option1 = <HeaderOption text="For You" Icon={FeaturedPlayListIcon} />;
  let option2 = <HeaderOption text="Following" Icon={PeopleIcon} />;
  let option3 = <HeaderOption text="Circle" Icon={Diversity1Icon} />;

  return (
    <div className="feed">
        {/* Header */}
        {
          userName == "" &&
          <Header text={filter}/>
        }
        {
          userName != "" &&
          <Header text={userName} options={[option1, option2, option3]} handleOptionClick={handleOptionClick}/>
        }

        {/* TweetBox */}
        {
          userName != "" &&
          <TweetBox />
        }

        {/* Post */}
        <Tweet text="Hello World!"/>
        <Tweet text="@elonmusk who?"/>
        <Tweet text="#MuskHub"/>
        <Tweet text="کیا مجھے پیار ہے؟"/>

    </div>
  )
}