import React, { useEffect } from 'react';
import { cardsSelectors, fetchImages } from 'redux-store';
import { useDispatch, useSelector } from 'react-redux';
import { ImagesGrid, PageLayout } from 'components';

export const GamePage = () => {
  const cards = useSelector(cardsSelectors.selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    if (cards.length === 0) {
      dispatch(fetchImages());
    }
  }, [dispatch, cards]);
  return (
    <PageLayout>
      <ImagesGrid images={cards} />
    </PageLayout>
  );
};
