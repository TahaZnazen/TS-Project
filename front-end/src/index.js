import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, combineReducers } from "redux";
// /////////////////////////
// import store from "./store";
// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import reducers from "./reducers";
// /////////
// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById("root"));
