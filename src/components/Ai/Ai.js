import React, { useState, useContext } from "react";
import deck from '../../images/deck.png';
import Button from '@material-ui/core/Button';
import questionM from '../../images/qm.png';
import API from '../../utils/API';
import { UserContext } from "../../utils/UserContext";

const Ai = () => {

    const {compWins} = useContext(UserContext);
    const [cardVal, setCardVal] = useState();
    const [drawnCardImg, setDrawnImg] = useState(questionM);

    const drawCard = () => {
        API.draw()
        .then(res => {
            const {images, value} = res.data.cards[0];
            console.log(value)
            setDrawnImg(images.svg)
            setCardVal(value)
        })
    };


    return(
        <>
            <h1>Computer</h1>
            <p>Score: {compWins}</p>
            <div className="cards">
                <img src={drawnCardImg} alt="card" height="300px" width="200px"/>
            </div>
            <hr/>
            <Button variant="contained" disabled>Computer</Button>
        </>
    )
};

export default Ai;