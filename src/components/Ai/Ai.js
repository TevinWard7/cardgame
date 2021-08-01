import React, { useContext } from "react";
import Button from '@material-ui/core/Button';
import { UserContext } from "../../utils/UserContext";

const Ai = () => {

    const {compWins, compCardImg} = useContext(UserContext);

    return(
        <>
            <h1>Computer</h1>
            <p>Score: {compWins}</p>
            <div className="cards">
                <img src={compCardImg} alt="card" height="300px" width="200px"/>
            </div>
            <hr/>
            <Button variant="contained" disabled>Computer</Button>
        </>
    )
};

export default Ai;