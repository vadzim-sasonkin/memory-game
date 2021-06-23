import React, { useEffect } from 'react';
import { gameActions, gameSelectors } from 'redux-store';
import { useDispatch, useSelector } from 'react-redux';
import { PageLayout } from 'components';
import { CardsGrid } from 'components/cards-grid';

export const GamePage = () => {
  const gameInitialized = useSelector(gameSelectors.gameInitialized);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!gameInitialized) {
      dispatch(gameActions.startGame());
    }
  }, [dispatch, gameInitialized]);
  return (
    <PageLayout>
      <CardsGrid />
    </PageLayout>
  );
};
