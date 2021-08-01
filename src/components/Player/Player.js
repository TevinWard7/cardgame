import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import { UserContext } from "../../utils/UserContext";
import star from '../../images/circle-16.png';

const Player = () => {

    const {wins, userCardImg, drawCards, disablePly} = useContext(UserContext);

    const addStar = (num) => {
        if (num === 1) return(<img src={star} alt="star"/>);
        if (num === 2) return(<><img src={star} alt="star"/> <img src={star} alt="star"/></>)
    }

    return(
        <>
            <h1>You</h1>
            <p>Score: {wins}</p>
            <div className="cards">
                <img src={userCardImg} alt="card" height="250px" width="250px"/>
            </div>
            <hr/>
            {disablePly === true ? 
            <Button variant="contained" disabled>Playing..</Button>
            :
            <Button variant="contained" onClick={() => drawCards()}>Play hand</Button>}
            <p>{addStar(wins)}</p>
        </>
    )
};

export default Player;