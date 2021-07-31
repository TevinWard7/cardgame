import React from "react";
import deck from '../../images/deck.png';
import Button from '@material-ui/core/Button';

const Player = () => {
    return(
        <>
            <h1>You</h1>
            <p>Score</p>
            <div>
                <img src={deck} alt="card deck" height="200px" width="200px"/>
                <img src={deck} alt="card deck" height="200px" width="200px"/>
            </div>
            <Button variant="contained">Play hand</Button>
        </>
    )
};

export default Player;