import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './HighScores.scss';

export const HighScores = () => {
  const highScores = localStorage.getItem('spider_scores');

  return (
    <div className="scores">
      <h1>High scores</h1>
      {highScores ?
        highScores.split(",").map((score, index) => {
          const splittedScore = score.split(":");
          
          return (<div key={index} className="score">
            <div className="score__name">{(index + 1) + '. ' + splittedScore[0]}</div>
            <div className="score__value">{splittedScore[1]}</div>
          </div>);
        }) : "No records"}
        <Link className="scores__link" to="./">Back to menu</Link>
    </div>
  );
}
