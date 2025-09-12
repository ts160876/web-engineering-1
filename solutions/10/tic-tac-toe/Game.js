"use strict";

import { Player } from "./Player.js";

//Model for Game
export class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    //Set the player to start the game.
    this.currentPlayer = player1;
    //Initialize the board.
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.movesLeft = 9;
    //Set winner and loser to null.
    this.winner = null;
    this.loser = null;
  }

  //Method to switch players
  switchPlayer() {
    this.currentPlayer === this.player1
      ? (this.currentPlayer = this.player2)
      : (this.currentPlayer = this.player1);
  }

  //Method to update the board at position x,y with the (symbol of) the current player
  updateBoard(x, y) {
    this.board[x][y] = this.currentPlayer.symbol;
    this.movesLeft--;
  }

  //Method to check if the current player has won
  checkAndSetWinner() {
    if (
      //First row
      (this.board[0][0] === this.currentPlayer.symbol &&
        this.board[0][1] === this.currentPlayer.symbol &&
        this.board[0][2] === this.currentPlayer.symbol) ||
      //Second row
      (this.board[1][0] === this.currentPlayer.symbol &&
        this.board[1][1] === this.currentPlayer.symbol &&
        this.board[1][2] === this.currentPlayer.symbol) ||
      //Third row
      (this.board[2][0] === this.currentPlayer.symbol &&
        this.board[2][1] === this.currentPlayer.symbol &&
        this.board[2][2] === this.currentPlayer.symbol) ||
      //First column
      (this.board[0][0] === this.currentPlayer.symbol &&
        this.board[1][0] === this.currentPlayer.symbol &&
        this.board[2][0] === this.currentPlayer.symbol) ||
      //Second column
      (this.board[0][1] === this.currentPlayer.symbol &&
        this.board[1][1] === this.currentPlayer.symbol &&
        this.board[2][1] === this.currentPlayer.symbol) ||
      //Third column
      (this.board[0][2] === this.currentPlayer.symbol &&
        this.board[1][2] === this.currentPlayer.symbol &&
        this.board[2][2] === this.currentPlayer.symbol) ||
      //First diagonal
      (this.board[0][0] === this.currentPlayer.symbol &&
        this.board[1][1] === this.currentPlayer.symbol &&
        this.board[2][2] === this.currentPlayer.symbol) ||
      //Second diagonal
      (this.board[0][2] === this.currentPlayer.symbol &&
        this.board[1][1] === this.currentPlayer.symbol &&
        this.board[2][0] === this.currentPlayer.symbol)
    ) {
      //Set moves to zero
      this.movesLeft = 0;
      //The current player is the winner.
      this.winner = this.currentPlayer;
      //The other player is the loser.
      this.currentPlayer === this.player1
        ? (this.loser = this.player2)
        : (this.loser = this.player1);
      //Return true, if there is a winner.
      return true;
    } else {
      //Return false, if there is no winner.
      return false;
    }
  }
}
