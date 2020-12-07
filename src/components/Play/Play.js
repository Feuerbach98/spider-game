import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../store/store';
import { Button } from '../Button/Button';
import { EndGame } from '../EndGame/EndGame';
import { PlayingField } from '../PlayingField/PlayingField';


import './Play.scss';

export const Play = () => {
  const storage = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.changeLevel())
  }, []);

  return (
    <div className="play">
      <div className="play__top">
        <h2 className="play__score">Score: {storage.score}</h2>
        <h2 className="play__level">Level: {storage.level}</h2>
      </div>
      <PlayingField />
      <Link className="play__link" to="./end-game">End game</Link>
    </div>
  );
};
