import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreetingSuccess = (message) => {
  return {
    type: FETCH_GREETING_SUCCESS,
    payload: message
  }
}

export const fetchGreeting = () => {
  return dispatch => {
    return axios.get('/random_greeting')
      .then(response => {
        dispatch(fetchGreetingSuccess(response.data.message));
      })
      .catch(error => {
        // Handle error if needed
      });
  }
}
