
import player from '../../../data/data.json';
import './Player.css';
import React, { useEffect, useState } from 'react';
import PlayerInformation from '../../PlayerInformation/PlayerInformation';
import Cart from '../../Cart/Cart';

const Playerlist = () => {

    const [playes,setPlayer] =useState([]);
    const [cart, setCart]= useState([]);
   
    useEffect(()=>{
      setPlayer(player);
   
     
   },[]);
    const handlePlayer =(player) =>{
      const newCart=[...cart , player];
      setCart(newCart);
    
    }
    return (
        <div class="player-draft">
        
          <div class="players-detils">
          
            {
               player.map(pl=> <PlayerInformation player={pl} handlePlayer={handlePlayer}></PlayerInformation> )
            }
          </div>
           
          <div className="cart-detils">
          
            
              
              <Cart cart={cart} ></Cart>
          </div>
        </div>
    );
};

export default Playerlist;