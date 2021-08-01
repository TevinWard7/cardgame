import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import { UserContext } from "../../utils/UserContext";
import star from '../../images/circle-pink.png';

const Player = () => {

    const {wins, userCardImg, drawCards, disablePly, addStar} = useContext(UserContext);

    return(
        <>
            <h1>You</h1>
            {/* <p>Wins: {wins}</p> */}
            <div className="cards">
                <img src={userCardImg} alt="card" height="250px" width="250px"/>
            </div>
            <hr/>
            {disablePly === true ? 
            <Button variant="contained" disabled>Playing..</Button>
            :
            <Button variant="contained" onClick={() => drawCards()}>Play hand</Button>}
            <p>{addStar(wins, star)}</p>
        </>
    )
};

export default Player;