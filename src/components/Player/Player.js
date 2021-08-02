import React, { useContext, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { UserContext } from "../../utils/UserContext";
import star from '../../images/circle-pink.png';
import anime from 'animejs/lib/anime.es.js';

const Player = () => {

    const {wins, userCardImg, drawCards, disablePly, addStar, p1Congrat} = useContext(UserContext);

    const [btnOp, setBtnOp] = useState(0);

    useEffect(() => {

        // When component mounts set the opacity of button to 0 in prep for animation
        setBtnOp(0);

        anime({
          targets: 'Button',
          keyframes: [
            {opacity: 0},
            {translateY: 250},
            {opacity: 100},
            {translateY: 0},
          ],
          duration: 2000,
          easing: 'easeInOutQuad'
        });

        // After trick is over set opacity to 100
        setBtnOp(100);
    
    },[])

    return(
        <>
            <h2>You</h2>
                <div className="cards">
                    <img src={userCardImg} alt="card" height="200px" width="200px"/>
                    <div className="congrat-overlay" style={{zIndex: p1Congrat}}></div>
                </div>
            <hr className="line"/>
            <p>Wins: {addStar(wins, star)}/5</p>
            {disablePly === true ? 
            <Button variant="contained" disabled>Playing..</Button>
            :
            <Button style={{opacity: btnOp}} variant="contained" onClick={() => drawCards()}>Play hand</Button>}
            
        </>
    )
};

export default Player;