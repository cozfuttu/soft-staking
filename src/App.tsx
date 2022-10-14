import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEagerConnect } from "hooks/useEagerConnect";
import { useFetchData } from "state/hooks";

const Home = lazy(() => import("./views/Home"));

function App() {
  useEagerConnect();
  useFetchData();

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
