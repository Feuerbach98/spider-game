import React from 'react';
import './Button.scss';

export const Button = ({ title, link, fn }) => {
  return (
    <button type="button" className="button">
      <a className="button__link" href={link} onClick={fn}>
        {title}
      </a>
    </button>
  );
};

Button.defaultProps = {
  link: void(0),
  fn: () => {},
};

