import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { fetchUsersAsync, incrementAsync } from './counterSlice';

const Test = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    
  const promise = dispatch(fetchUsersAsync());
  
  // const promise = dispatch(incrementAsync(10));
    
    return () => {
      promise.abort();
    };
  }, []);

  return (
    <div>test</div>
  )
}

export default Test