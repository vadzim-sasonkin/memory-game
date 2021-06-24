import React from 'react';
import classes from './index.module.css';

export const Scoreboard = ({ score, guessed, all }) => {
  return (
    <div className={classes.container}>
      <div className={classes.score}>
        <div>{`Score is ${Number(score * 100).toFixed(1) || 0} %`}</div>
        <div className={classes['score-description']}>
          Score is a number of guessed cards divided by the number of clicks
        </div>
      </div>
      <div className={classes.guessed}>
        <span>{`Number of guessed pairs is ${guessed} / ${all}`}</span>
      </div>
    </div>
  );
};
