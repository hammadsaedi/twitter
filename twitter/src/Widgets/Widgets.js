import React from 'react'
import './Widgets.css'
import Trend from './Trend'

export default function Widgets({handleClick, handleTrendClick}) {
  const trends = [
    { rank: 1, name: 'ڈاکٹر عافیہ کو رہا کرو#', count: 1000},
    { rank: 2, name: '#Bitcoin', count: 800},
    { rank: 3, name: '#ImranKhan', count: 600},
    { rank: 4, name: '#PDM', count: 600}, 
    { rank: 5, name: '#ISPR', count: 600},  
    { rank: 7, name: '#FreeDrAfia', count: 600}, 
    { rank: 8, name: '#Goat', count: 600}, 
    { rank: 9, name: '#BabarAzam', count: 600}, 
    { rank: 10, name: '#NoKhanNoTV', count: 600}
  ];

  const handleTagClick = (e) => {
    handleClick("Hashtag");
    handleTrendClick(e);
  };

  return (
    <div className='Widgets'>
      <h2>Top Trends</h2>
      {trends.map((trend, index) => (
        <Trend className="trends" key={index} trend={trend} handleTrendClick={handleTagClick}/>
      ))}
    </div>
  )
}
