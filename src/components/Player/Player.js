import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import { UserContext } from "../../utils/UserContext";

const Player = () => {

    const {wins, userCardImg, drawCards} = useContext(UserContext);

    return(
        <>
            <h1>You</h1>
            <p>Score: {wins}</p>
            <div className="cards">
                <img src={userCardImg} alt="card" height="250px" width="200px"/>
            </div>
            <hr/>
            <Button variant="contained" onClick={() => drawCards()}>Play hand</Button>
        </>
    )
};

export default Player;