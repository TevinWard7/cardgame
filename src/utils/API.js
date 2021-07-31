// import React from 'react';
import axios from 'axios';

const API = {

    draw: () => {
        return axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    }
    
};

export default API;