import { combineReducers } from "redux";
import userReducers from "./reducers/userReducers";

export default combineReducers({
  user:userReducers
})