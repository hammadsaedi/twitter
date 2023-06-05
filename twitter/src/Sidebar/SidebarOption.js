import React from 'react'
import './SidebarOption.css'

export default function SidebarOption({active, text, Icon, onClick}) {
    const handleClick = () => {
      onClick(text);
      console.log(active);
    };
    
    return (
    <div className= {`sidebarOption ${active && 'sidebarOption__active'}`} onClick={handleClick}>
        <Icon />
      <h2>{text}</h2>
    </div>
  )
}
