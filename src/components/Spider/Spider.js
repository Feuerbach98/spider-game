import React, { useEffect } from 'react';
import './Spider.scss';

import spiderImg from '../../images/spider_man_PNG43.png';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/store';

export const Spider = () => {
  const storage = useSelector(store => store);
  const dispatch = useDispatch();

  let intervalId;

  const handleKeyDown = (event) => {
    clearInterval(intervalId);

    if (event.key === 'ArrowUp') {
      intervalId = setInterval(() => dispatch(actions.top()), storage.speed);
    } else if (event.key === 'ArrowDown') {
      intervalId = setInterval(() => dispatch(actions.bottom()), storage.speed);
    } else if (event.key === 'ArrowRight') {
      intervalId = setInterval(() => dispatch(actions.right()), storage.speed);
    } else if (event.key === 'ArrowLeft') {
      intervalId = setInterval(() => dispatch(actions.left()), storage.speed);
    }
    console.log('handel',intervalId);


  }

  useEffect(() => {
    clearInterval(intervalId);
    document.addEventListener("keydown", handleKeyDown.bind(this));

    return () => {
      clearInterval(intervalId);
      console.log('use', intervalId)
      document.removeEventListener("keydown", handleKeyDown.bind(this));
    };
  }, []);

  return (
    <div>
      <img
        style={storage.spider}
        src={spiderImg}
        className="spider"
        alt="spider"
      />
    </div>
  );
};

