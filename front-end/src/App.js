import React from "react";
import "./App.scss";
import FirstPage from "./components/FirstPAge/FirstPage";
import JobOffers from "./components/jobOffers/JobOffers";
import Cv from "./components/CV/Cv";
import Test from "./views/Forms/BasicForms";
import TestBilel from "./components/TestBilel";
import formTest from "./components/formTest";

//import TestBilel from "./components/TestBilel";
function App() {
  return (
    <div className="App">
      {/* <FirstPage /> */}
      {/* <JobOffers /> */}
      {/* <TestBilel /> */}
      <Cv />
      {/*  <Test /> */}
    </div>
  );
}

export default App;
