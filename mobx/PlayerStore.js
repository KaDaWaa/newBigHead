import { makeObservable,observable,computed,action } from "mobx";
const letterBank=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
export class PlayerStore{
    counter=0;
    players=[];
    gameStarted=false;
    word="";
    shownWord="";
    temp_letterBank=[];
    words=[
        "battlebus",
        "vbucks",
        "tiltedtowers",
        "pickaxe",
        "lootllama",
        "storm",
        "shotgun",
        "buildbattle",
        "supplydrop",
        "glider",
        "sniperrifle",
        "chugjug",
        "dustydepot",
        "boogiebomb",
        "rpg",
        "snobbyshores",
        "bush",
        "emote",
        "flossdance",
        "clinger",
        "pumpshotgun",
        "tomatotown",
        "portafort",
        "quadcrasher",
        "rifttogo",
        "slurpjuice"
      ];

      constructor(){
        makeObservable(this,{
            players:observable,
            shownWord:observable,
            gameStarted:observable,
            addPlayer:action,
            deletePlayer:action,
            generateWord:action,
            guessLetter:action
        })
      }
      addPlayer({name,bigHead}){
        this.players.push({
            id:this.counter++,
            name:name,
            bigHead:bigHead,
            points:0,
            letter_guessed:[]
            
        })
      }

      deletePlayer(id){
        console.log(this.players.toString())
        this.players=this.players.filter((p)=>p.id!=id);
      }
      generateWord(){
        this.players.forEach(p=>{
          p.points=0;
          p.letter_guessed=[];
        })
        this.temp_letterBank=letterBank;
        this.shownWord="";
        this.word=this.words[Math.floor(Math.random()*this.words.length)]
        for(let i=0;i<this.word.length;i++){
          this.shownWord+="_";
        }
        this.gameStarted=true;
      }

      guessLetter(){
        let alerted=false;
        this.players.forEach(player=>{
          let letter=this.temp_letterBank[Math.floor(Math.random()*this.temp_letterBank.length)];
          player.letter_guessed=[...player.letter_guessed,letter];
          console.log(player.name+" "+JSON.stringify(player.letter_guessed));
          if(this.word.includes(letter)){
            let newShownWord="";

            for(let i=0;i<this.word.length;i++){
              if(this.word.split("")[i]==letter)
                newShownWord+=letter;
              else
                newShownWord+=this.shownWord[i];
            }
            this.shownWord=newShownWord;
            player.points++; 
          }
          this.temp_letterBank.splice(this.temp_letterBank.indexOf(letter),1);
          if(!(this.shownWord.includes("_"))){
            let winner=this.players[0];
            for(let i=1;i<this.players.length;i++){
              if(this.players[i].points>winner.points)
                winner=this.players[i];

            }
            setTimeout(()=>{this.gameStarted=false;},1000)
            if(!alerted){
              alert(winner.name+" Has won,with "+winner.points+" correct letters");
              alerted=true;
              }
            
            

            return;
          }
        });
      }
}