import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../features/randomGreetingSlice';

const Greeting = () => {
  const greeting = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (greeting.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Greetings</h1>
      <p>{greeting.greeting.message}</p>
    </div>
  );
}

export default Greeting;