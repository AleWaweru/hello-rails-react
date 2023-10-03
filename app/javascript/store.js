import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './features/randomGreetingSlice';

const store = configureStore({
reducer: {
  greeting: greetingReducer,
},
});
export default store;