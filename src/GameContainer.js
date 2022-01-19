import './App.css';
import React, { useState } from 'react';
import Grid from './Grid';
//import 'bootstrap/dist/css/bootstrap.min.css';
// {/* <h2>Who's Turn</h2>
// <div id="whos-turn" className="x">
//     <span className="x">Player 1</span>
//     <span className="o">Player 2</span>
// </div> */}
function GameContainer(props) {
    function ResetGame(){
        var newArray=['','','','','','','','','']
        props.SetGameRounds([...newArray]);
        props.SetTturn(0);
    }
    function ResetStats(){
        var score=document.querySelectorAll('[id*="-score"]');
        for(let i=0;i<score.length;i++){
            score[i].textContent='0';
        }
        ResetGame();
    }
  return (
    
    <div className="container">
    <h1>Tic-Tac-Toe</h1>
    <ul id="game">
    {props.GameRounds.map((todo,index)=>
      <Grid RowIndex={index} IndexValue={todo} GameRounds={props.GameRounds} SetGameRounds={props.SetGameRounds}Turn={props.Tturn} SetTurn={props.SetTturn } CheckForWwinner={props.CheckkForWinner} RestartGame={ResetGame}/>
      )}
            </ul>
        <button onClick={ResetGame} id="reset-game">Reset Game</button>
        <button onClick={ResetStats} id="restart-game">Restart Score</button>
    
            <div id="game-messages">
                <span className="player-x-win">Player One Wins</span>
                <span className="player-o-win">Computer Wins</span>
                <span className="draw">Draw Game</span>
            </div>
            
            <aside id="nfo">
                <h2>Score Card</h2>
                <div id="score">
                    Player 1: <span id="player-x-score">0</span> <br />
                    Player 2: <span id="player-o-score">0</span> <br />
                </div>
            </aside>
    </div>
  );
}

export default GameContainer;
