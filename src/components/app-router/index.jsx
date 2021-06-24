import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Navigation } from 'components';
import { GamePage, InitPage, ScorePage } from 'pages';
import classes from './index.module.css';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Switch>
          <Route path="/init">
            <InitPage />
          </Route>
          <Route path="/game">
            <GamePage />
          </Route>
          <Route path="/score">
            <ScorePage />
          </Route>
          <Redirect to="init" />
        </Switch>
        <Navigation />
      </div>
    </BrowserRouter>
  );
};
