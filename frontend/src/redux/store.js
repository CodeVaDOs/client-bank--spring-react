import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import reducers from './_reducer';

export const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
);
