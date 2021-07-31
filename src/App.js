import './App.css';
import React, {useState} from 'react';
import Player from './components/Player/Player';
import Computer from './components/Ai/Ai';
import { UserContext } from './utils/UserContext';

function App() {

  const [wins, setWins] = useState(0);
  const [compWins, setCompWins] = useState();


  return (
    <div className="App background">

      <UserContext.Provider value={{wins, compWins}}>

        <h1>Game</h1>

        <div className="players">

          <div>
            <Player />
          </div>

          <div>
            <Computer />
          </div>

        </div>

      </UserContext.Provider>

    </div>
  );
}

export default App;