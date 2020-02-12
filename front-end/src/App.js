import React, { Component } from "react";
import "./App.scss";
import FirstPage from "./components/FirstPAge/FirstPage";
import JobOffers from "./components/jobOffers/JobOffers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import CompanyProfile from "./components/companyProfile/CompanyProfile";
import DashBoard from "./components/companyDashBoard/dashBoard";
import CompanySetting from "./components/companyDashBoard/setting";

import Offer from "./components/companyProfile/addOffer/Offer";
import MainAuth from "./components/Auth/MainAuth";

import store from "./store";
import { Provider } from "react-redux";
// import { loadUser } from "./actions/authActions";
import history from "./history";
import Login from "./components/Auth/User-auth/Login";
import Register from "./components/Auth/User-auth/Register";
import CompanyLogin from "./components/Auth/Company-auth/CompLogin";
import CompanyRegister from "./components/Auth/Company-auth/CompRegister";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ForgetConfirmation from "./components/Auth/ForgetConfirmation";
import CompanyJobsDashBord from "./components/companyPublicProfile/CompanyJobsDashBord";
import CompanyPublic from "./components/companyPublicProfile/profile/CompanyPublic";
import Cv from "./components/CV/Cv";
import TestBilel from "./components/TestBilel";
import TestBilel2 from "./components/TestBilel2";
import Template from "./views/Forms/ValidationForms/ValidationForms";
import ProfileUser from "./components/Profile/ProfileUser";
import ProfileView from "./components/Profile/ProfileView";
//import ProfileTest from "./components/Profile/ProfileElment/Profiletest";
class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  // }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/Jobs">
                <JobOffers />
              </Route>
              <Route exact path="/">
                <FirstPage />
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
              <Route exact path="/Auth">
                <MainAuth />
              </Route>
              <Route exact path="/Employers">
                <CompanyLogin />
              </Route>
              <Route exact path="/Employers/Register">
                <CompanyRegister />
              </Route>
              <Route exact path="/Employee">
                <Login />
              </Route>
              <Route exact path="/Employee/Register">
                <Register />
              </Route>
              <Route exact path="/Employee/forgetpassword">
                <ForgetPassword />
              </Route>
              <Route exact path="/Employee/forgetpasswordConfirmation">
                <ForgetConfirmation />
              </Route>
              <Route exact path="/company/jobsDashBoard">
                <CompanyJobsDashBord />
              </Route>
              <Route exact path="/companySetting" component={CompanySetting} />
              <Route exact path="/company/:id" component={CompanyPublic} />
              <Route exact path="/cv">
                <Cv />
              </Route>
              <Route exact path="/test">
                <Template />
              </Route>
              <Route exact path="/test2">
                <TestBilel2 />
              </Route>
              <Route exact path="/user/:id" component={ProfileView} />

              <Route exact path="/profileUser">
                <ProfileUser />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
