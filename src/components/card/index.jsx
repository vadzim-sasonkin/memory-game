import React from 'react';
import classNames from 'classnames';
import classes from './index.module.css';

export const Card = ({ card, disabled, onClick }) => {
  if (!card.image) {
    return null;
  }
  return (
    <div
      className={classNames(classes.container, classes[card.status], {
        [classes.disabled]: disabled,
      })}
      {...(!disabled ? { onClick: () => onClick(card) } : {})}
    >
      <div className={classes.card}>
        <div className={classes.imgside}>
          <img src={card.image.url} alt={card.image.description} />
        </div>
        <div className={classes.backside}>
          <span>HOHOH</span>
        </div>
      </div>
    </div>
  );
};
