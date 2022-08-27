import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from 'components';
import { useEagerConnect } from 'hooks/useEagerConnect';

const Home = lazy(() => import('./views/Home'))

function App() {
  useEagerConnect()
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
