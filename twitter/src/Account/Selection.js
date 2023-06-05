import React from 'react'
import './Selection.css'

export default function Selection({name, dropdown, option, handleOptionChange}) {

  return (
    <div className="radio-option">
        <input
            type="radio"
            id={name}
            value={name}
            checked={option === name}
            onChange={handleOptionChange}
        />
        <label className="radio-label" htmlFor={name}>{name}</label>
        {option === name && dropdown && dropdown}
        </div>
  );
};
