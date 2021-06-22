import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Navigation } from 'components';
import { GamePage, InitPage, ScorePage } from 'pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
