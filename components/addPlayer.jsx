import React, { useState } from "react";
import { getRandomBighead } from "../bighead";
import { BigHead } from "@bigheads/core";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const AddPlayer=observer(({playerStore}) => {
    const [name,setName]=useState("");
    const [bigHead,setBigHead]=useState();

    useEffect(()=>{
        setBigHead(getRandomBighead())
    }, [])
    
    function startGame(){
        playerStore.gameStarted=true;
        playerStore.generateWord();
    }


    return(<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div> {bigHead && <BigHead style={{width:"250px",height:"250px"}} {...bigHead}/>}</div>

        <input type="text" name="playername" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>setBigHead(getRandomBighead())}>Random Head</button>
        <button onClick={()=>{ console.log("added");playerStore.addPlayer({name,bigHead});setBigHead(getRandomBighead()); setName("")}}>Add</button>
        {playerStore.players.length>=2 && playerStore.players.length<=5 && <button onClick={()=>{startGame()}}>Start game</button>}
        </div>
        
    )
});

export default AddPlayer;