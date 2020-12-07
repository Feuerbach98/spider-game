import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../store/store';
import './GoToLevel.scss';

export const GoToLevel = () => {
  const storage = useSelector(store => store);
  const dispatch = useDispatch();

  const changeLevel = (level) => {
    dispatch(actions.changeGoTo(level))
  }

  const levelsCount = +localStorage.getItem('spider_levels');
  const levels = [];

  for (let i = 0; i < levelsCount; i++) {
    levels.push(
      <Link key={i} onClick={() => changeLevel(i + 1)} to="./play" className="go-to-level__level">{i + 1}</Link>
    )
  }

  return (<>
    <div className="go-to-level">
      {
        levels.map(level => level)
      }
    </div>
    <Link className="go-to-level__link" to="./">Back to menu</Link>
  </>)
}
