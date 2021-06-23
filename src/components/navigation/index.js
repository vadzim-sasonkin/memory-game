import React from 'react';
import { Link } from 'react-router-dom';
import classes from './index.module.css';

export const Navigation = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.list}>
        <Link to="/init">Init</Link>
        <Link to="/game">Game</Link>
        <Link to="/score">Score</Link>
      </nav>
    </div>
  );
};
