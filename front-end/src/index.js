import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./store/reducers/counter";
import itemsReducer from "./store/reducers/items";

//test my reducer

import reducer from "./reducers";
import testReducer from "./reducers/testReducer";

/* const rootReducer = combineReducers({
  count: counterReducer,
  items: itemsReducer,
  data: testReducer
}); */
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
