import React from 'react';
import './PlayerInformation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const PlayerInformation = (props) => {
      const {first_name,img,selary} =props.player;
    return (
        <div class="player-card">
            
            <img src={img} alt=""/> <br/>
            <h3>{first_name}</h3>
            <h3>${selary}/Month</h3>
            <button onClick={() =>props.handlePlayer(props.player)}><FontAwesomeIcon icon={faPlus} /> Hire Player</button>
        </div>
    );
};

export default PlayerInformation;