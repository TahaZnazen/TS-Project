import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import cvReducer from "./cvReducer";
export default combineReducers({
  posts: postReducer,
  cvUser: cvReducer
});


