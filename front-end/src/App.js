import React from "react";
import "./App.scss";
import FirstPage from "./components/FirstPAge/FirstPage";
import JobOffers from "./components/jobOffers/JobOffers";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CompanyProfile from "./components/companyProfile/CompanyProfile";
import DashBoard from "./components/companyDashBoard/dashBoard";

import Offer from "./components/companyProfile/addOffer/Offer";
import MainAuth from "./components/Auth/MainAuth";
import Cv from "./components/CV/Cv";
import TestBilel from "./components/TestBilel";
import TestBilel2 from "./components/TestBilel2";
import Test from "./views/Forms/BasicForms/BasicForms";
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
          <Route exact path="/company">
            <CompanyProfile />
          </Route>
          <Route exact path="/addOffer">
            <Offer />
          </Route>
          <Route exact path="/dashBoard">
            <DashBoard />
          </Route>
          <Route exact path="/cv">
            <Cv />
          </Route>
          <Route exact path="/test">
            <TestBilel />
          </Route>
          <Route exact path="/test2">
            <TestBilel2 />
          </Route>
          <Route exact path="/template">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
