// reducers - helps us manage app state
// const reducer = (state, action) => newState;

function counterReducer_(state = { count: 0 }, action) {
	return { ...state, count: state.count + 1 };
}

console.log(counterReducer_())
console.log(counterReducer_({count: 1}))
console.log(counterReducer_({count: 2}))
console.log(counterReducer_({count: 3}))

function counterReducer(state = {count: 0}, action = { action: '' }){
  const { type } = action
  switch(type){
    case 'INCREMENT': return { ...state, count: state.count + 1 };
    case 'DECREMENT': return { ...state, count: state.count - 1 };
    default: return state;
  }
}
console.log(counterReducer())
console.log(counterReducer({count: 1}, {type: 'INCREMENT'}))
console.log(counterReducer({count: 2}, {type: 'INCREMENT'}))
console.log(counterReducer({count: 3}, {type: 'INCREMENT'}))
