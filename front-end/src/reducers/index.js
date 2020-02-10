import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import cvReducer from "./cvReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

export default combineReducers({
  posts: postReducer,
  cvUser: cvReducer,
  auth: authReducer
});
