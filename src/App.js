import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
    else if(seconds===0&& minutes>0){
      setTimeout(() => setSeconds(59), 1000);
      setTimeout(() => setMinutes(minutes-1), 1000);
    } 
    else {
      setSeconds('BOOOOM!');
    }
  });

  return (
    <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
  );
}

export default App;
