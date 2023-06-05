import React from 'react'

export default function Dropdown({name, options, selectedOption, handleOptionChange}) {
    return (
        <div>
            <select className="select" value={selectedOption} onChange={handleOptionChange}>
                {/* <option value="">{name}</option> */}
                {options.map(opt => (
                    <option key={opt.id} value={opt.id}>{opt.name}</option>
                ))}
            </select>
        </div>
  );
};
