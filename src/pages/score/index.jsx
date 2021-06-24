import React from 'react';
import { useSelector } from 'react-redux';
import { gameSelectors } from 'redux-store';
import { PageLayout, Scoreboard } from 'components';
import classes from './index.module.css';

export const ScorePage = () => {
  const score = useSelector(gameSelectors.score);
  const guessed = useSelector(gameSelectors.guessed);
  return (
    <PageLayout>
      <div className={classes.container}>
        <Scoreboard score={score} guessed={guessed} />
      </div>
    </PageLayout>
  );
};
