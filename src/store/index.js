import { createStore } from 'redux'

const initState = {
  count: 0,
  price: 100,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export default createStore(reducer)
