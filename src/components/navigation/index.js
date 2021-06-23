import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './index.module.css';

export const Navigation = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.list}>
        <NavLink activeClassName={classes.active} to="/init">Init</NavLink>
        <NavLink activeClassName={classes.active} to="/game">Game</NavLink>
        <NavLink activeClassName={classes.active} to="/score">Score</NavLink>
      </nav>
    </div>
  );
};
