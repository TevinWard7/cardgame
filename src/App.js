import './App.css';
import Player from './components/Player/Player';
import Computer from './components/Ai/Ai';

function App() {
  return (
    <div className="App background">

      <h1>Game</h1>

      <div className="players">

        <div>
          <Player />
        </div>

        <div>
          <Computer />
        </div>

      </div>

    </div>
  );
}

export default App;