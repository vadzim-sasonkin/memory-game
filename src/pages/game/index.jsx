import React, { useEffect } from 'react';
import { cardsSelectors, fetchImages, gameActions } from 'redux-store';
import { useDispatch, useSelector } from 'react-redux';
import { PageLayout } from 'components';
import { CardsGrid } from 'components/cards-grid';

export const GamePage = () => {
  const cards = useSelector(cardsSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cards.length === 0) {
      dispatch(fetchImages());
    }
  }, [dispatch, cards]);
  useEffect(() => {
    if (cards.length) {
      dispatch(gameActions.initGame(cards));
    }
  }, [dispatch, cards]);
  return (
    <PageLayout>
      <CardsGrid />
    </PageLayout>
  );
};
