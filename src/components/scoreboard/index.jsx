import React from 'react';
import classes from './index.module.css';

export const Scoreboard = ({ score, guessed }) => {
  return (
    <div className={classes.container}>
      <div className={classes.score}>
        <div>{`Score is ${score || 0}`}</div>
        <div className={classes['score-description']}>
          Score is a number of guessed cards divided by the number of clicks
        </div>
      </div>
      <div className={classes.guessed}>
        <span>{`Number of guessed pairs is ${guessed}`}</span>
      </div>
    </div>
  );
};
