import './App.css';
import React, { useState } from 'react';
import Grid from './Grid';
//import 'bootstrap/dist/css/bootstrap.min.css';
function GameContainer(props) {
    function ResetGame(){
        var newArray=['','','','','','','','','']
        props.SetGameRounds([...newArray]);
        props.SetTturn(0);
    }
  return (
    
    <div className="container">
    <h1>Tic-Tac-Toe</h1>
    <ul id="game">
    {props.GameRounds.map((todo,index)=>
      <Grid RowIndex={index} IndexValue={todo} GameRounds={props.GameRounds} SetGameRounds={props.SetGameRounds}Turn={props.Tturn} SetTurn={props.SetTturn } CheckForWwinner={props.CheckkForWinner}/>
      )}
            </ul>
        <button onClick={ResetGame} id="reset-game">Reset Game</button>
    
            <div id="game-messages">
                <span className="player-x-win">Player One Wins</span>
                <span className="player-o-win">Player Two Wins</span>
                <span className="draw">Draw Game</span>
            </div>
            
            <aside id="nfo">
                <h2>Who's Turn</h2>
                <div id="whos-turn" className="x">
                    <span className="x">Player 1</span>
                    <span className="o">Player 2</span>
                </div>
                
                <h2>Score Card</h2>
                <div id="score">
                    Player 1: <span id="player-one-score">0</span> <br />
                    Player 2: <span id="player-two-score">0</span> <br />
                </div>
            </aside>
    </div>
  );
}

export default GameContainer;
