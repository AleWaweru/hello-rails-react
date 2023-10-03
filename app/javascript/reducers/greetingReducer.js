import { FETCH_GREETING_SUCCESS } from '../actions/greetingActions';

const initialState = {
  message: ''
};

const greetingReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}

export default greetingReducer;
