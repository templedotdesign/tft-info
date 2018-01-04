const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

//Reducer
const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'INC_COUNTER':
      return {...state, counter: state.counter + 1}
    case 'ADD_COUNTER':
      return {...state, counter: state.counter + action.payload.value}
    default:
      return state;
  }
};

//Store
const store = createStore(rootReducer);

//Subsrciption
store.subscribe(() => {
  console.log('Subscription', store.getState());
});


//Dispatch an action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', payload: {value: 10}});





