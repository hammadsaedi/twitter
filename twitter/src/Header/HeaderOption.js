import React from 'react'
import './HeaderOption.css'

export default function HeaderOption({ active, text, Icon, handleOptionClick, flag }) {

  return (
    <div className={`HeaderOption  ${active ? 'Option__active' : ''}`}  onClick={handleOptionClick}>
      <Icon className='HeaderOptionIcon' />
      <h2 className={flag && 'flag'}>{text}</h2>
    </div>
  );
}
