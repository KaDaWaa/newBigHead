import { observer } from "mobx-react-lite";
import AddPlayer from "./addPlayer";
import PlayerList from "./playerList";
import { useEffect } from "react";

const Game=observer(({playerStore})=>{
    useEffect(() => {
        let intervalId;
    
        const startInterval = () => {
          intervalId = setInterval(() => {
            playerStore.guessLetter();
    
            if (!playerStore.gameStarted) {
              clearInterval(intervalId);
            }
          }, 1000);
        };
    
        if (playerStore.gameStarted) {
          startInterval();
        }
    
        return () => {
          clearInterval(intervalId);
        };
      }, [playerStore.gameStarted, playerStore.guessLetter]);
    
    return(<>
    {!playerStore.gameStarted ?
        <div style={{display:"flex",justifyContent:"center", flexDirection:"column"}}>
        <AddPlayer playerStore={playerStore}/>
        <PlayerList playerStore={playerStore}/>
        </div>
        :<>
        <PlayerList playerStore={playerStore}/>
        <h2 style={{display:"flex",justifyContent:"center"}}>{playerStore.shownWord}</h2>
        </>
        }
</>)
});
export default Game;