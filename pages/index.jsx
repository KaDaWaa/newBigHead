import React from "react";
import { useState } from "react";
import AddPlayer from "../components/addPlayer";
import PlayerList from "../components/playerList";
import { PlayerStore } from "../mobx/PlayerStore";
import Game from "../components/Game";

export default function App(){
    const playerStore=new PlayerStore();
    return (<>
    <Game playerStore={playerStore}/>
    
    </>
    )
}