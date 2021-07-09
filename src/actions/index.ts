import { PLAYERS_UPDATE_VALUE } from './actionTypes';

export const clickButton = (value: any) => ({
  type: PLAYERS_UPDATE_VALUE,
  newValue: value
});