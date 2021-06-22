import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { store } from 'redux/store';
import { Navigation } from 'components';
import { GamePage, InitPage, ScorePage } from 'pages';
import './App.css';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
