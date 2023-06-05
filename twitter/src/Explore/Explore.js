import {React, useState} from 'react'
import '../Center/Feed.css'
import Header from '../Header/Header'
// import HeaderOption from '../Header/HeaderOption'


// import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
// import PeopleIcon from '@mui/icons-material/People';
// import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Explore() {
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
        <Header text="Explore" handleOptionClick={handleOptionClick}/>

    </div>
  )
}
