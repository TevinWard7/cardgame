import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import { UserContext } from "../../utils/UserContext";
import star from '../../images/circle-blue.png';

const Ai = () => {

    const {compWins, compCardImg, addStar} = useContext(UserContext);

    return(
        <>
            <h1>Computer</h1>
            {/* <p>Wins: {compWins}</p> */}
            <div className="cards">
                <img src={compCardImg} alt="card" height="250px" width="250px"/>
            </div>
            <hr/>
            <Button variant="contained" disabled>Computer</Button>
            <p>{addStar(compWins, star)}/5</p>
        </>
    )
};

export default Ai;