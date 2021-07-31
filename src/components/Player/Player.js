import React from "react";
import deck from '../../images/deck.png';
import Button from '@material-ui/core/Button';
import questionM from '../../images/qm.png';
import { useState } from "react";
import API from '../../utils/API'

const Player = () => {

    const [drawnCard, setDrawnCard] = useState();
    const [drawnCardImg, setDrawnImg] = useState(questionM);

    const drawCard = () => {
        API.draw()
        .then(res => {
            const {image, value} = res.data.cards[0];
            setDrawnImg(image);
            console.log(res.data.cards[0])
        })
    };

    return(
        <>
            <h1>You</h1>
            <p>Score:</p>
            <div className="cards">
                <img src={deck} alt="card deck" height="200px" width="200px"/>
                <img src={drawnCardImg} alt="card deck" height="150px" width="200px"/>
            </div>
            <hr/>
            <Button variant="contained" onClick={drawCard}>Play hand</Button>
        </>
    )
};

export default Player;