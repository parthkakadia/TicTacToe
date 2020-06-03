import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares : any[];
  xIsNext: boolean;
  winner: string;
  gameOver:boolean

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.squares=Array(9).fill(null);
    this.winner=null;
    this.xIsNext=true;
    this.gameOver=false;
  }

  get player(){
    return this.xIsNext?'X':'O';
  }

  value(id ){
    return this.squares[id];
  }

  makeMove(id:number){
    if(!this.squares[id]){
      this.squares.splice(id,1,this.player);
      this.xIsNext=!this.xIsNext;
    }
    this.winner=this.calculateWinner();
    
    if(this.winner){
      this.gameOver=true;
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }
}
