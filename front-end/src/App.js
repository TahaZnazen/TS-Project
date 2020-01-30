import React from "react";
import "./App.scss";
import Counter from "./components/Counter";
import FirstPage from "./components/FirstPAge/FirstPage";
import JobOffers from "./components/jobOffers/JobOffers";
function App() {
  return (
    <div className="App">
      {/* <FirstPage /> */}
      <JobOffers />
    </div>
  );
}

export default App;
