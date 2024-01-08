import React, { useState } from "react";
import { getRandomBighead } from "../bighead";
import { BigHead } from "@bigheads/core";
import { useEffect } from "react";
import ShowPlayer from "./showPlayer";
import { observer } from "mobx-react-lite";

const PlayerList=observer(({playerStore})=>{
    console.log(`list : ${JSON.stringify(playerStore.players)}`)
    function deletePlayer(id){
        playerStore.deletePlayer(id);
    }
    return(<>
    <div style={{display:"flex",justifyContent:"space-around",}}>{playerStore.players.map((player,index)=> 
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><ShowPlayer key={player.id} player={player} deletePlayer={deletePlayer} gameStarted={playerStore.gameStarted}/></div>
    
    )}
    </div>
    </>)
});

export default PlayerList;