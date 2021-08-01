import './App.css';
import React, {useState} from 'react';
import Player from './components/Player/Player';
import Computer from './components/Ai/Ai';
import { UserContext } from './utils/UserContext';
import deck from './images/h.gif';
import sprinkle from './images/fs.gif'
import qblue from './images/q-blue.png';
import qpink from './images/q-pink.png';
import gameZone from './images/game.png'
import API from './utils/API';
import Button from '@material-ui/core/Button';

function App() {

  const [wins, setWins] = useState(0);
  const [compWins, setCompWins] = useState(0);

  const [compCardImg, setCompCardImg] = useState(qblue);
  const [compSuit, setCompSuit] = useState();
  const [compCardVal, setCompCardVal] = useState();

  const [userCardImg, setUserCardImg] = useState(qpink);
  const [userSuit, setUserSuit] = useState();
  const [userCardVal, setUserCardVal] = useState();

  const [disablePly, setDisablePly] = useState(false);

  const winner = (WhoWon) => {

    if (WhoWon === "Computer") {
      setCompWins(compWins + 1);
      setTimeout(() => { setCompCardImg(sprinkle); }, 1050);
      setTimeout(() => { setCompCardImg(compCardImg); }, 3050);
    }
    if (WhoWon === "User") {
      setWins(wins + 1);
      setTimeout(() => { setUserCardImg(sprinkle); }, 2000);
      setTimeout(() => { setUserCardImg(userCardImg); }, 3050);
    }

  }

  const compareCards = () => {
    console.log("machine: " + compSuit);
    console.log("you: " + userSuit);

    if (userSuit !== compSuit) {
      if (compSuit === "SPADES" && userSuit !== "SPADES") winner("Computer");
      if (userSuit === "SPADES" && compSuit !== "SPADES") winner("Computer");
      
      
    }
    if (userSuit === compSuit) {

      if (compCardVal > userCardVal) {
        winner("Computer");
      }
      else {
        winner("User");
      }

    }

    // Enable play button again
    setTimeout(() => { setDisablePly(false); }, 3000);
    
  }


  const storeCardValues = (res) => {

    // Set the suit of the card from API
    setCompSuit(res.data.cards[1].suit);
    setUserSuit(res.data.cards[0].suit);

    // Set the # "value" of the card from API
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

  const addStar = (num, image) => {
    if (num === 1) return(<img src={image} alt="star"/>);
    if (num === 2) return(<><img src={image} alt="star"/> <img src={image} alt="star"/></>);
    if (num === 3) return(<><img src={image} alt="star"/> <img src={image} alt="star"/> <img src={image} alt="star"/></>);
    if (num === 4) return(<><img src={image} alt="star"/> <img src={image} alt="star"/> <img src={image} alt="star"/> <img src={image} alt="star"/></>);
    if (num === 5) return(<><img src={image} alt="star"/> <img src={image} alt="star"/> <img src={image} alt="star"/> <img src={image} alt="star"/> <img src={image} alt="star"/></>);
  };

  return (
    <div className="App background">

      {wins === 5 || compWins === 5 ?
      <div className="end-screen">
        <h3>{wins === 5 ? `You Win 🏆 ` : `Machine Wins 🏆 `}</h3>
        <Button variant="contained" onClick={() => window.location.reload()} color="default">Reset</Button>
      </div>
      :
      <UserContext.Provider value={{wins, compWins, userCardImg, compCardImg, drawCards, disablePly, addStar}}>

        <img src={gameZone} alt="game" width="66" height="66" id="logo"/>
        <h1>HIGH CARD WINS</h1>

        <div className="players">

          <div>
            <Player />
          </div>

          <div>
            <Computer />
          </div>

        </div>

      </UserContext.Provider>
      }

    </div>
  );
}

export default App;