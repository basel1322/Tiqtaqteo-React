import './App.css';
import React, { useState } from 'react';
import { findAllByDisplayValue, render } from '@testing-library/react';
//import 'bootstrap/dist/css/bootstrap.min.css';
function Grid(props) {
  var wincond = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function Computerturn(sign,Game){
      for (var i = 0; i < wincond.length; i++) {
        if ((Game[wincond[i][0]]) == sign && (Game[wincond[i][1]]) ==sign && (Game[wincond[i][2]]) == '') {
          (Game[wincond[i][2]]) = 'O';
            return true;
        }
  
        else if ((Game[wincond[i][1]]) == sign && (Game[wincond[i][2]])== sign && (Game[wincond[i][0]]) == '') {
          (Game[wincond[i][0]]) = 'O';
          return true;
        }
  
        else if ((Game[wincond[i][0]])== sign && (Game[wincond[i][2]])== sign && (Game[wincond[i][1]]) == '') {
          (Game[wincond[i][1]]) = 'O';
          return true;
        }

  
    }
    return false;
  }
  function setXOrO(e){
  if( e.target.innerText==''){
   var temp=props.GameRounds;
   temp[props.RowIndex]= props.Turn%2 ?'O':'X';
   props.SetTurn((props.Turn+2));
   props.SetGameRounds([...temp]);
   if(props.CheckForWwinner('X')||props.CheckForWwinner('O')){
    console.log("DOne");
  }
   if(props.Turn<8){
    var Game=props.GameRounds;
     if(!Computerturn('O',Game)&&!Computerturn('X',Game)){
        var random=getRandomInt(9);
        while(Game[random]){
         random=getRandomInt(9);
        }
        Game[random]='O';
      
   }
   props.SetGameRounds([...Game]);

  if(props.CheckForWwinner('X')||props.CheckForWwinner('O')){
    console.log("DOne");
  }
  }
  }
  
}
  
  return ( 
        <li onClick={setXOrO} class={props.IndexValue} key={props.RowIndex}>{props.IndexValue}</li>
  );
}

export default Grid;
