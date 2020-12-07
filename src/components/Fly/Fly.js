import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import flyImg from '../../images/fly.png';
import { actions } from '../../store/store';
import './Fly.scss';

export const Fly = () => {
  const storage = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.start())
  }, []);

  return (
    <img
      src={flyImg}
      className="fly"
      alt="fly"
      style={storage.fly}
    />
  )
}
