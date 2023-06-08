import React, { useState} from 'react';
import './OptionPane.css'


export default function OptionPane({ text, options, handleOptionClick}) {
  let option1 = "";
  if (options) {
    option1 = options[0]?.props.text;
  }

  const [activeOption, setActiveOption] = useState(option1);

  const handleClick = (text) => {
    handleOptionClick(text);
    setActiveOption(text);
  };

  return (
    <header className='Header OptionPane'>
      <h2>{text}</h2>
      <section className="options">
        {options && options.map((option) =>
          React.cloneElement(option, {
            active: activeOption === option.props.text,
            handleOptionClick: () => handleClick(option.props.text),
          })
        )}
      </section>
    </header>
  );
}
