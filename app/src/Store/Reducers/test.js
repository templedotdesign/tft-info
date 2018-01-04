const intialState = {
  counter: 0
};

const testReducer = (state = intialState, action) => {
  switch(action.type) {
    case 'INC_COUNTER':
      return {...state, counter: state.counter + 1}
    case 'DEC_COUNTER':
      return {...state, counter: state.counter - 1}
    case 'ADD_COUNTER':
      return {...state, counter: state.counter + action.payload.value}
    case 'SUB_COUNTER':
      return {...state, counter: state.counter - action.payload.value}
    default:
      return state; 
  }
};

export default testReducer;