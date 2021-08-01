import './App.css';
import React, {useState} from 'react';
import Player from './components/Player/Player';
import Computer from './components/Ai/Ai';
import { UserContext } from './utils/UserContext';
import deck from './images/h.gif';
import sprinkle from './images/fs.gif'
import questionM from './images/qm.png';
import gameZone from './images/game.png'
import API from './utils/API';

function App() {

  const [wins, setWins] = useState(0);
  const [compWins, setCompWins] = useState(0);

  const [userCardImg, setUserCardImg] = useState(questionM);
  const [userCardVal, setUserCardVal] = useState();

  const [compCardImg, setCompCardImg] = useState(questionM);
  const [compCardVal, setCompCardVal] = useState();

  const [disablePly, setDisablePly] = useState(false);

  const compareCards = () => {

    if (compCardVal > userCardVal) {
      setCompWins(compWins + 1);
      setTimeout(() => { setCompCardImg(sprinkle); }, 1050);
      setTimeout(() => { setCompCardImg(compCardImg); }, 3050);
    };
    if (userCardVal > compCardVal) {
      setWins(wins + 1);
      setTimeout(() => { setUserCardImg(sprinkle); }, 2000);
      setTimeout(() => { setUserCardImg(userCardImg); }, 3050);
    };

    // Enable play button again
    setTimeout(() => { setDisablePly(false); }, 3000);
    
    
  };

  const storeCardValues = (res) => {

    // Set the "value" of the card from API
    setCompCardVal(res.data.cards[1].value);
    setUserCardVal(res.data.cards[0].value);

    // Set card image for user & computer
    setCompCardImg(res.data.cards[1].images.svg);
    setUserCardImg(res.data.cards[0].images.svg);
    
    compareCards();

  };

  const dramaPause = (res) => {

    setUserCardImg(deck);
    setTimeout(() => { storeCardValues(res); }, 3000);

  }

  const drawCards = async () => {

    // Disable from pressing draw again right awat
    setDisablePly(true);

    // Draw cards from the API (2 cards)
    let res = await API.draw();

    dramaPause(res);

  };


  return (
    <div className="App background">

      <UserContext.Provider value={{wins, compWins, userCardImg, compCardImg, drawCards, disablePly}}>

        <h1>High Card Wins</h1>
        <img src={gameZone} alt="game" width="50" height="50"/>

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