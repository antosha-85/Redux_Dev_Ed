import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signIn} from './actions'
 
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick ={()=> dispatch(increment(5))}>+</button>
      <button onClick = {()=> dispatch(decrement(1))}>-</button>
      {!isLogged ? <button onClick = {()=> dispatch(signIn())}>Sign In</button> : <button onClick = {()=> dispatch(signIn())}>Sign Out</button>}

      {isLogged ? <h3>Valuable information I should not see</h3> : ""}
    </div>
  );
}

export default App;
