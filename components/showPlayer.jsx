import React, { useState } from "react";
import { getRandomBighead } from "../bighead";
import { BigHead } from "@bigheads/core";
import { useEffect } from "react";

const ShowPlayer=({deletePlayer,player,gameStarted})=>{

    return(
        <>
        <h1>{player.name}</h1>

        <BigHead style={{width:"200px"}} {...player.bigHead}/>
        {!gameStarted &&<button onClick={()=>deletePlayer(player.id)}>Delete</button>}
        <br></br>
        {gameStarted && <>
        <h3>{player.points}</h3> 
        <div style={{display:"flex", flexDirection:"row"}}>guessed letters:{player.letter_guessed.map((l)=>{
            return <p> {l} </p>
        })}</div>
        </>}
        </>
    )
};
export default ShowPlayer;