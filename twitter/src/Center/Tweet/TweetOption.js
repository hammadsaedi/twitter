import React from 'react'
import './TweetOption.css';

export default function TweetOption({Icon, count}) {
  return (
    <div className='TweetOption'>
        <Icon className='Icon'/>
        <span className="tweet-action-count">{count}</span>
    </div>
  )
}
