import { playersReducer } from './playersReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  playersState: playersReducer
});