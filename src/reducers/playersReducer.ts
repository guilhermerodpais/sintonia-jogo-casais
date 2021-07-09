import { PLAYERS_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
  newValue: 'Atualizado via Redux!'
};

export const playersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PLAYERS_UPDATE_VALUE:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
}