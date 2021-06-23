import React from 'react';
import { useSelector } from 'react-redux';
import { gameSelectors } from 'redux-store';
import { PageLayout } from 'components';
import classes from './index.module.css';

export const ScorePage = () => {
  const score = useSelector(gameSelectors.score);
  const guessed = useSelector(gameSelectors.guessed);
  return (
    <PageLayout>
      <div className={classes.container}>
        <span>{`Score is ${score}`}</span>
        <span>{`Number of guessed is ${guessed}`}</span>
      </div>
    </PageLayout>
  );
};
