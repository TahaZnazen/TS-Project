import React from "react";
import "./App.scss";
import FirstPage from "./components/FirstPAge/FirstPage";
import JobOffers from "./components/jobOffers/JobOffers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainAuth from "./components/Auth/MainAuth";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <FirstPage />
          </Route>
          <Route exact path="/Jobs">
            <JobOffers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
