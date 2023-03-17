import { combineReducers } from "redux";
import auth from "./authReducer";
import topic from "./topicReducer";

export default combineReducers({
  auth,
  topic
});