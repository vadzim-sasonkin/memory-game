import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchImages } from 'redux-store';
import { Button, PageLayout } from 'components';
import classes from './index.module.css';

export const InitPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleStartClick = async () => {
    await dispatch(fetchImages());
    history.push('/game');
  };
  return (
    <PageLayout>
      <div className={classes.container}>
        <Button onClick={handleStartClick}>Start a new game</Button>
      </div>
    </PageLayout>
  );
};
