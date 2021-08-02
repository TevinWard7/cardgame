import './App.css';
import React, {useEffect, useState} from 'react';
import Player from './components/Player/Player';
import Computer from './components/Ai/Ai';
import { UserContext } from './utils/UserContext';
import deck from './images/h.gif';
import qblue from './images/q-blue.png';
import qpink from './images/q-pink.png';
import gameZone from './images/game.png'
import API from './utils/API';
import Button from '@material-ui/core/Button';
import anime from 'animejs/lib/anime.es.js';


function App() {

  const [wins, setWins] = useState(0);
  const [compWins, setCompWins] = useState(0);

  const [compCardImg, setCompCardImg] = useState(qblue);
  const [p2Congrat, setP2Congrat] = useState();

  const [userCardImg, setUserCardImg] = useState(qpink);
  const [p1Congrat, setP1Congrat] = useState();

  const [disablePly, setDisablePly] = useState(false);

  const winner = (WhoWon) => {

    if (WhoWon === "Computer") {
      setCompWins(compWins + 1);
      setTimeout(() => { setP2Congrat(999); }, 1050);
      setTimeout(() => { setP2Congrat(-1); }, 3050);
    }
    if (WhoWon === "User") {
      setWins(wins + 1);
      setTimeout(() => { setP1Congrat(999); }, 1050);
      setTimeout(() => { setP1Congrat(-1); }, 3050);
    }

  };

  const compareCards = (suits, values) => {

    const [compS, userS] = suits;
    const [compV, userV] = values;
    console.log(suits)
    console.log(`comparefunc -> compval: ${compV}, userval: ${userV}`)

    const sOrder = {
      "CLUBS":1,
      "DIAMONDS":2,
      "HEARTS":3,
      "SPADES":4,
    };

    const vOrder = {
      1:1,
      2:2,
      3:3,
      4:4,
      5:5,
      6:6,
      7:7,
      8:8,
      9:9,
      10:10,
      "JACK":12,
      "QUEEN":13,
      "KING":14,
      "ACE":15,
    };

    if (compS !== userS) {
      if (sOrder[compS] > sOrder[userS]) winner("Computer");
      if (sOrder[compS] < sOrder[userS]) winner("User");
    }

    if (compS === userS) {
      if (vOrder[compV] > vOrder[userV]) winner("Computer");
      if (vOrder[compV] < vOrder[userV]) winner("User");
    }

    // Enable play button again
    setTimeout(() => { setDisablePly(false); }, 3000);
    
  };

  const storeCardValues = (res) => {

    // Set the # "value" of the card from API
    // Set card image
    setCompCardImg(res.data.cards[1].images.svg);

    setUserCardImg(res.data.cards[0].images.svg);

    // Put computer suit [1] & user suit into an array
    const suits = [res.data.cards[1].suit, res.data.cards[0].suit];
    const values = [res.data.cards[1].value, res.data.cards[0].value]
    console.log(`storeVal function -> Comp: ${res.data.cards[1].value} You: ${res.data.cards[0].value}`);

    compareCards(suits, values);

  };

  const dramaPause = (res) => {

    // Set user's card image to a "loading" image
    setUserCardImg(deck);

    // Store values and go through the rest of the chain after 3milisec for dramatic pause
    setTimeout(() => { storeCardValues(res); }, 3000);

  }

  const drawCards = async () => {

    // Disable from pressing draw again right away
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

  useEffect(() => {
    anime({
      targets: '#end-t',
      keyframes: [
        {opacity: 0},
        {opacity: 25},
        {opacity: 45},
        {opacity: 75},
        {opacity: 100},
      ],
      duration: 3000,
      easing: 'easeInOutQuad'
    });

    anime({
      targets: '#end-btn',
      keyframes: [
        {opacity: 0},
        {translateY: 550},
        {opacity: 100},
        {translateY: 0},
        
      ],
      duration: 3000,
      easing: 'easeInOutQuad'
    });

  },[wins, compWins])

  return (
    <div className="App background">

      {wins === 5 || compWins === 5 ?
      <div className="end-screen">
        <h3 id="end-t" style={{opacity:0}}>{wins === 5 ? `You Win 🏆 ` : `Machine Wins 🏆 `}</h3>
        <Button style={{opacity:0}} id="end-btn" variant="contained" onClick={() => window.location.reload()} color="default">Reset</Button>
      </div>
      :
      <UserContext.Provider value={{wins, compWins, userCardImg, compCardImg, drawCards, disablePly, addStar, p1Congrat, p2Congrat}}>

        <img src={gameZone} alt="game" width="66" height="66" id="logo"/>
        <h1>HIGH CARD WINS</h1>

        <div className="players">

          <div id="p1">
            <Player />
          </div>

          <div id="p2">
            <Computer />
          </div>

        </div>

      </UserContext.Provider>
      }

    </div>
  );
}

export default App;