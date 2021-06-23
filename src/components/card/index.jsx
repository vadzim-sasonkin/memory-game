import React from 'react';
import classNames from 'classnames';
import { cardStatuses } from 'utils/game';
import classes from './index.module.css';

export const Card = ({ card, onClick }) => {
  if (!card.image) {
    return null;
  }
  return (
    <div
      className={classNames(classes.container, classes[card.status])}
      onClick={() => onClick(card)}
    >
      <div className={classes.card}>
        <div className={classes.imgside}>
          <img src={card.image.url} alt={card.image.description} />
        </div>
        {card.status !== cardStatuses.GUESSED && (
          <div className={classes.backside}>
            <span>HOHOH</span>
          </div>
        )}
      </div>
    </div>
  );
};
