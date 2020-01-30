import { combineReducers } from "redux";
import TestReducer from "./testReducer";
import counter from "../store/reducers/counter";
import items from "../store/reducers/items";

const reducers = combineReducers({
  test: TestReducer,
  counter: counter,
  items: items
});

export default reducers;
