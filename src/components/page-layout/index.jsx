import React from 'react';
import classes from './index.module.css';

export const PageLayout = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
