import React, { useContext } from "react";
import { UserContext } from "../../utils/UserContext";
import star from '../../images/circle-blue.png';

const Ai = () => {

    const {compWins, compCardImg, addStar, p2Congrat} = useContext(UserContext);

    return(
        <>
            <h2>AI</h2>
            <div className="cards">
                <img src={compCardImg} alt="card" height="200px" width="200px"/>
                <div className="congrat-overlay" style={{zIndex: p2Congrat}}></div>
            </div>
            <hr style={{color:"transparant"}}/>
            {/* <Button variant="contained" disabled>Computer</Button> */}
            <p>{addStar(compWins, star)}</p>
        </>
    )
};

export default Ai;