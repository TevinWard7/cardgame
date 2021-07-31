import React from "react";
import deck from '../../images/deck.png';
import Button from '@material-ui/core/Button';
import questionM from '../../images/qm.png';

const Ai = () => {
    return(
        <>
            <h1>Computer</h1>
            <p>Score</p>
            <div>
                <img src={deck} alt="card deck" height="200px" width="200px"/>
                <img src={questionM} alt="card deck" height="200px" width="200px"/>
            </div>
            <Button variant="contained">Computer</Button>
        </>
    )
};

export default Ai;