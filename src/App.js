
import './App.css';
import GameContainer from './GameContainer';
import React, { useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [Game,Setgame] = useState(['','','','','','','','','']);
  const[Turn,setTurn]=useState(0);
  var wincond = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  function CheckForWinner(sign){
    for (var i = 0; i < wincond.length; i++) {
      if ((Game[wincond[i][0]]) == sign && (Game[wincond[i][1]]) ==sign && (Game[wincond[i][2]]) == sign) {
          return true;
      }

      else if ((Game[wincond[i][1]]) == sign && (Game[wincond[i][2]])== sign && (Game[wincond[i][0]]) == sign) {
          return true;
      }

      else if ((Game[wincond[i][0]])== sign && (Game[wincond[i][2]])== sign && (Game[wincond[i][1]]) == sign) {
          return true;
      }

  }
  }
  
  return (
    <div className="row">
   <GameContainer GameRounds={Game} SetGameRounds={Setgame} Tturn={Turn} SetTturn={setTurn} CheckkForWinner={CheckForWinner}/>
    </div>
  );
}

export default App;
