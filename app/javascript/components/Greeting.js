import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../actions/greetingActions';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.greeting.message);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Greeting</h1>
      <p>{message}</p>
    </div>
  );
}

export default Greeting;
