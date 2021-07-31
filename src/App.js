import './App.css';
import deck from './images/deck.png'

function App() {
  return (
    <div className="App background">

      <h1>Game</h1>

      <div className="players">

        <div>
          <h1>You</h1>
          <img src={deck} alt="card deck" height="200px" width="200px"/>
        </div>

        <div>
          <h1>Computer</h1>
          <img src={deck} alt="card deck" height="200px" width="200px"/>
        </div>

      </div>

    </div>
  );
}

export default App;