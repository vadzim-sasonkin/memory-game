import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gameActions } from 'redux-store';
import { cardStatuses } from 'utils/game';
import { Card } from '../card';

export const CardsGrid = () => {
  const cards = useSelector((state) => state.game.cards);
  const dispatch = useDispatch();
  const handleCardClick = (card) => {
    if (card.status === cardStatuses.GUESSED) {
      return;
    }
    dispatch(gameActions.setCardStatus({ position: card.position }));
  };

  return (
    <div>
      {cards.map((card) => (
        <Card key={card.position} card={card} onClick={handleCardClick} />
      ))}
    </div>
  );
};
