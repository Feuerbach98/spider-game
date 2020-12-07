import React from 'react';
import './Alert.scss';

export const Alert = ({ title, actions }) => (
  <div className="alert">
    <div className="alert__main">
      <h2>{title}</h2>
      <div className="alert__actions">
        {actions.map((action, index) => (
          <a
            key={index}
            className="alert__action"
            onClick={action.func}
            href={action.href}
          >
            {action.title}
          </a>
        ))}
      </div>
    </div>
  </div>
);
