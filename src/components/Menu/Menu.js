import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../store/store';
import { Button } from '../Button/Button';
import './Menu.scss';

export const Menu = () => {
  const storage = useSelector(store => store);
  const dispatch = useDispatch();

  const resetStep = () => {
    dispatch(actions.changeGoTo(1))
  }

  return (
    <ul className="menu">
      <li className="menu__item">
        <Link className="menu__link" to="./play" onClick={resetStep}>Play</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="./go-to-level" >Go to level</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="./high-scores" >High scores</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="./settings" >Settings</Link>
      </li>
      <li className="menu__item">
        <Link className="menu__link" to="./about" >About</Link>
      </li>
    </ul>
  );
};
