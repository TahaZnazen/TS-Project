import { combineReducers } from "redux";
import cvReducer from "./cvReducer";
//import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  cvUser: cvReducer
  //userExperiencesForm: formReducer
});

export default reducers;
