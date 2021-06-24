import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from 'redux-store';
import { gameSelectors } from 'redux-store';
import { config } from 'utils';
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
    dispatch(gameActions.setStatus({ position: card.position }));
  };

  useEffect(() => {
    const shownCards = cards.filter((card) => card.status === cardStatuses.SHOWN);
    if (shownCards.length >= 2) {
      setTimeout(() => {
        dispatch(gameActions.close(shownCards));
      }, config.delay);
    }
  }, [cards, dispatch]);

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
