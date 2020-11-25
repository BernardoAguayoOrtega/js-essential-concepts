// reducers - helps us manage app state
// const reducer = (state, action) => newState;

function counterReducer(state = { count: 0 }, action) {
	return { ...state, count: state.count + 1 };
}

console.log(counterReducer())
console.log(counterReducer({count: 1}))
console.log(counterReducer({count: 2}))
console.log(counterReducer({count: 3}))