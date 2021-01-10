import {combineReducers} from "redux";
import {customer} from "./CustomerReducer";
import {account} from "./AccountReducer";

const rootReducer = combineReducers({
  customer,
  account
});

export default rootReducer;
