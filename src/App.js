import './App.css';
import React, {useState} from 'react';
import Player from './components/Player/Player';
import Computer from './components/Ai/Ai';
import { UserContext } from './utils/UserContext';
// import deck from './images/deck.png';
import questionM from './images/qm.png';
import API from './utils/API';

function App() {

  const [wins, setWins] = useState(0);
  console.log(`wins: ${wins}`)
  const [compWins, setCompWins] = useState(0);

  const [userCardImg, setUserCardImg] = useState(questionM);
  const [userCardVal, setUserCardVal] = useState();

  const [compCardImg, setCompCardImg] = useState(questionM);
  const [compCardVal, setCompCardVal] = useState();

  const compareCards = () => {

    if (userCardVal > compCardVal) setWins(wins + 1);
    if (userCardVal < compCardVal) setCompWins(compWins + 1);

  };

  const setCardProps = (res) => {

    // Set card image for user & get the "value" of the card from API
    setUserCardImg(res.data.cards[0].images.svg);
    setUserCardVal(res.data.cards[0].value);

    // Set card image for computer & get the "value" of the card from API
    setCompCardImg(res.data.cards[1].images.svg);
    setCompCardVal(res.data.cards[1].value);

    compareCards();

  }

  const drawCards = async () => {

    // Draw cards from the API (2 cards)
    let res = await API.draw();

    setCardProps(res)

  };

  return (
    <div className="App background">

      <UserContext.Provider value={{wins, compWins, userCardImg, compCardImg, drawCards}}>

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