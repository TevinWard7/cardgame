import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import { UserContext } from "../../utils/UserContext";
import star from '../../images/circle-pink.png';

const Player = () => {

    const {wins, userCardImg, drawCards, disablePly, addStar} = useContext(UserContext);

    return(
        <>
            <h2>You</h2>
            <div className="cards">
                <img src={userCardImg} alt="card" height="200px" width="200px"/>
            </div>
            <hr/>
            <p>{addStar(wins, star)}</p>
            {disablePly === true ? 
            <Button variant="contained" disabled>Playing..</Button>
            :
            <Button variant="contained" onClick={() => drawCards()}>Play hand</Button>}
            
        </>
    )
};

export default Player;