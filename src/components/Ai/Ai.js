import React, { useContext } from "react";
import { UserContext } from "../../utils/UserContext";
import star from '../../images/circle-blue.png';

const Ai = () => {

    const {compWins, compCardImg, addStar} = useContext(UserContext);

    return(
        <>
            <h2>AI</h2>
            <div className="cards comp-player">
                <img src={compCardImg} alt="card" height="250px" width="250px"/>
            </div>
            {/* <hr/> */}
            {/* <Button variant="contained" disabled>Computer</Button> */}
            <p>Wins:{addStar(compWins, star)}/5</p>
        </>
    )
};

export default Ai;