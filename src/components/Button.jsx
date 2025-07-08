import React from 'react';
import ShinyText from './ShinyText';

const Button = ({ text, className, id }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('work');

    if (target && id) {
         target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  return (
    <button
      onClick={handleClick}
      id={id}
      className={`cta-wrapper ${className ?? ''}`}
      type="button"
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <ShinyText text="see my work!" className="text" />
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </button>
  );
};

export default Button;
