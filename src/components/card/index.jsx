import React from 'react';
import classNames from 'classnames';
import classes from './index.module.css';

export const Card = ({ card, onClick }) => {
  return (
    <div
      className={classNames(classes.container, classes[card.status])}
      onClick={() => onClick(card)}
    >
      {card.id}
    </div>
  );
};
