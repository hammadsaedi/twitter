import React from 'react'
import './Trend.css'

export default function Trend({trend, handleTrendClick}) {
    const handleClick = (trend) => {
        handleTrendClick(trend);
        console.log("Trend Clicked FROM Trend.js" );
    };
    
    return (
        <div className="trend" aria-labelledby="trend-label" tabindex="0" role="link" onClick={() => handleClick(trend.name)}>
        <div className="trend-info">
            <div className="trend-rank">{trend.rank}</div>
            <div className="trend-separator">·</div>
            <div className="trend-status">Trending</div>
        </div>
        <div className="trend-name">
            <span className="hashtag">{trend.name}</span>
        </div>
        <div className="trend-count">{trend.count}</div>
        </div>
    )
};