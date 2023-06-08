import React from 'react';
import './TweetOption.css';

export default function TweetOption({ type, Icon, count, markedByUser, handleOptionClick }) {

  const handleClick = () => {
    console.log(markedByUser);
    handleOptionClick(type, markedByUser);
  };

  return (
    <div className={markedByUser ? 'TweetOption option_marked': 'TweetOption'}>
      <Icon className={markedByUser ? 'Icon icon_marked' : 'Icon'} onClick={handleClick} />
      <span className="tweet-action-count">{count}</span>
    </div>
  );
}
