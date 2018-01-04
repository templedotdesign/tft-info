import * as actionTypes from '../Actions/ActionsTypes';

const initialState = {
  mode: ''
}

const modeReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_MODE:
      return {...state, mode: action.payload.mode}
    default:
      return state;
  }
};

export default modeReducer;