import React, { useState } from 'react';

import Display from './Components/Display'
import Dashboard from './Components/Dashboard'

import './App.css';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const strike = () => {
    if (strikes === 2) {
      setBalls(0);
      setStrikes(0);
    } else {
      setStrikes(strikes + 1);
    }
  }

  const ball = () => {
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  }

  const foul = () => {
    if (strikes === 2) {
      return strikes;
    } else {
      setStrikes(strikes + 1)
    }
  }

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  }

  return (
    <div className="App">
      <Display
        balls={balls}
        strikes={strikes}
      />
      <Dashboard
        strike={strike}
        ball={ball}
        foul={foul}
        hit={hit}
      />
    </div>
  );
}

export default App;

//--------------------------------------
/*

'Balls' reset to 0 when it reaches 4 balls
Balls >= 4 , =0

'Strikes' reset to 0 when it reaches 3 strikes
Strikes >=3, =0

'Balls' and 'Strikes' reset to 0 when a 'hit' is recorded
hit +1 = balls&strikes = 0

'Foul' increases strikes to 2.
- No strikes? +1 Foul.
- 2 strikes? Foul has no effect and stays at 2 strikes.
+1 Foul = 2 Strikes
0 strikes? +1foul
2 strikes? Foul has no effect

*/