import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from 'redux-store';
import { gameSelectors } from 'redux-store';
import { cardStatuses, isCardDisabled } from 'utils/game';
import { Card } from '../card';
import classes from './index.module.css';

export const CardsGrid = () => {
  const cards = useSelector(gameSelectors.cards);
  const dispatch = useDispatch();
  const handleCardClick = (card) => {
    if (card.status === cardStatuses.GUESSED) {
      return;
    }
    dispatch(gameActions.setCardStatus({ position: card.position }));
  };

  return (
    <div className={classes.container}>
      {cards.map((card) => (
        <Card
          key={card.position}
          card={card}
          disabled={isCardDisabled(card.status, cards)}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};
