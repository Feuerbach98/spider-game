import React from 'react';
import './PlayingField.scss';

import { Spider } from '../Spider/Spider';
import { useSelector } from 'react-redux';
import { Fly } from '../Fly/Fly';

export const PlayingField = () => {
  const storage = useSelector(store => store);

  return (
    <div style={storage.fieldSize} className="PlayingField">
      <Fly />
      <Spider/>
    </div>
  )
}
