"use strict";

import { Player } from "./Player.js";
import { Game } from "./Game.js";

//Model for UiControl
export class UiControl {
  //Each <DIV> has an ID to be easily displayed or hidden.
  static aboutDiv = "about";
  static gameDiv = "game";
  static playersDiv = "players";
  static boardDiv = "board";

  //Each <BUTTON> has an ID to be easily identified. The ID describes from where to where to button takes the user.
  static aboutToPlayers = "aboutToPlayers";
  static playersToAbout = "playersToAbout";
  static playersToBoard = "playersToBoard";
  static boardToAbout = "boardToAbout";

  //All cells of the board use the same class "BOARD-CELL".
  static boardCell = "board-cell";

  //The four input fields to enter the players have IDs
  static name1Field = "players-name1";
  static name2Field = "players-name2";
  static color1Field = "players-color1";
  static color2Field = "players-color2";

  //The <P> of the players <DIV> has an ID to be easily identified.
  static playersText = "players-text";

  //The <P> of the board <DIV> has an ID to be easily identified.
  static boardText = "board-text";

  //Player symbols
  static player1Symbol = "X";
  static player2Symbol = "O";
  static blockedSymbol = "-";

  constructor() {
    //Per default the "About" <DIV> is displayed.
    this.displayAbout = true;
    this.displayGame = false;
    this.displayPlayers = false;
    this.displayBoard = false;

    //Game (variable set to null; will be instantiated later)
    this.game = null;

    //Ensure that all button clicks are handled.
    const buttons = document.getElementsByTagName("button");
    this.buttonClicked = this.buttonClicked.bind(this);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", this.buttonClicked);
    }

    //Ensure that clicks on the board are handled.
    const boardCells = document.getElementsByClassName(UiControl.boardCell);
    this.boardCellClicked = this.boardCellClicked.bind(this);
    for (let i = 0; i < boardCells.length; i++) {
      boardCells[i].addEventListener("click", this.boardCellClicked);
    }
  }

  //Method to switch to another <DIV>
  switchDisplay(target) {
    switch (target) {
      case UiControl.aboutDiv:
        this.displayAbout = true;
        this.displayGame = false;
        this.displayPlayers = false;
        this.displayBoard = false;
        break;
      case UiControl.gameDiv:
        this.displayAbout = false;
        this.displayGame = true;
        this.displayPlayers = false;
        this.displayBoard = false;
        break;
      case UiControl.playersDiv:
        this.displayAbout = false;
        this.displayGame = true;
        this.displayPlayers = true;
        this.displayBoard = false;
        break;
      case UiControl.boardDiv:
        this.displayAbout = false;
        this.displayGame = true;
        this.displayPlayers = false;
        this.displayBoard = true;
        break;
    }

    //A <DIV> to be displayed must not be assigned to class "hidden".
    //A <DIV> not to be displayed must be assigned to class "hidden".
    this.displayAbout === true
      ? document.getElementById(UiControl.aboutDiv).classList.remove("hidden")
      : document.getElementById(UiControl.aboutDiv).classList.add("hidden");
    this.displayGame === true
      ? document.getElementById(UiControl.gameDiv).classList.remove("hidden")
      : document.getElementById(UiControl.gameDiv).classList.add("hidden");
    this.displayPlayers === true
      ? document.getElementById(UiControl.playersDiv).classList.remove("hidden")
      : document.getElementById(UiControl.playersDiv).classList.add("hidden");
    this.displayBoard === true
      ? document.getElementById(UiControl.boardDiv).classList.remove("hidden")
      : document.getElementById(UiControl.boardDiv).classList.add("hidden");
  }

  //Methods to read form data
  readName1() {
    return document.getElementById(UiControl.name1Field).value;
  }
  readColor1() {
    return document.getElementById(UiControl.color1Field).value;
  }
  readName2() {
    return document.getElementById(UiControl.name2Field).value;
  }
  readColor2() {
    return document.getElementById(UiControl.color2Field).value;
  }

  //Method to initialize the players (needed in case the user plays multiple times)
  initializePlayers() {
    //By default, the names is not set and the color is black.
    document.getElementById(UiControl.name1Field).value = "";
    document.getElementById(UiControl.color1Field).value = "black";
    document.getElementById(UiControl.name2Field).value = "";
    document.getElementById(UiControl.color2Field).value = "black";

    this.setPlayersText("Get ready. Enter your and your opponent's name.");
  }

  //Method to initialize the board. That includes:
  //-Clearing all cells
  //-Creating a new game
  initializeBoard() {
    //Clear all cells of the board.
    const boardCells = document.getElementsByClassName(UiControl.boardCell);
    for (let i = 0; i < boardCells.length; i++) {
      boardCells[i].textContent = "";
    }

    //Create a new game.
    this.game = new Game(
      new Player(this.readName1(), this.readColor1(), UiControl.player1Symbol),
      new Player(this.readName2(), this.readColor2(), UiControl.player2Symbol)
    );

    this.setBoardText();
  }

  //Method to set the players text (which is displayed above the form to enter the player data)
  setPlayersText(text) {
    const playersText = document.getElementById(UiControl.playersText);
    if (text != undefined) {
      //Set the text from the method parameter.
      playersText.innerText = text;
    } else {
      //Check if there are problems. Display the corresponding error message.
      if (this.checkPlayerData() != null) {
        playersText.innerText = this.checkPlayerData();
      }
    }
  }

  //Method to set the board text (which is displayed above the board)
  setBoardText() {
    const boardText = document.getElementById(UiControl.boardText);
    if (this.game.movesLeft === 0) {
      if (this.game.winner != null) {
        //If there is a winner, the text displays the winner.
        boardText.innerText = this.game.winner.name + " is the winner!";
        boardText.style.color = this.game.winner.color;
      } else {
        //Otherwise say "It's a tie. No winner!"
        boardText.innerText = "It's a tie. No winner!";
        boardText.style.color = "black";
      }
    } else {
      //If there are moves left, the text indicates the current player.
      boardText.innerText = this.game.currentPlayer.name + ", it's your turn!";
      boardText.style.color = this.game.currentPlayer.color;
    }
  }

  //Check the player data. Return an error message, if there is a problem.
  checkPlayerData() {
    if (this.readName1() === "" || this.readName2() === "") {
      return "You need to enter both player names.";
    }

    if (this.readName1() === this.readName2()) {
      return "The name of the players must not be identical.";
    }
  }

  //Method to fill the remaining board (after the game is won)
  fillRemainingBoard() {
    const boardCells = document.getElementsByClassName(UiControl.boardCell);
    for (let i = 0; i < boardCells.length; i++) {
      if (boardCells[i].textContent === "") {
        boardCells[i].textContent = UiControl.blockedSymbol;
        boardCells[i].style.color = "black";
      }
    }
  }

  //Method to handle button clicks
  buttonClicked(event) {
    switch (event.target.id) {
      case UiControl.aboutToPlayers:
        this.initializePlayers();
        this.switchDisplay(UiControl.playersDiv);
        break;
      case UiControl.playersToAbout:
      case UiControl.boardToAbout:
        this.switchDisplay(UiControl.aboutDiv);
        break;
      case UiControl.playersToBoard:
        if (this.checkPlayerData() != null) {
          //How the error. Do not continue.
          this.setPlayersText();
        } else {
          //Only continue the navigation if there is no error
          this.initializeBoard();
          this.switchDisplay(UiControl.boardDiv);
        }
        break;
    }
  }

  //Method to handle clicks on the board
  boardCellClicked(event) {
    const boardCell = event.target;
    //Only react the click, if the cell is still empty and there is no winner.
    if (boardCell.textContent === "" && this.game.winner === null) {
      //Update the cell.
      boardCell.textContent = this.game.currentPlayer.symbol;
      boardCell.style.color = this.game.currentPlayer.color;

      //Update the game.
      this.game.updateBoard(Number(boardCell.id[7]), Number(boardCell.id[8]));

      //Continue depending on whether there is a winner or not.
      if (this.game.checkAndSetWinner() != true) {
        //No winner - switch to the other player.
        this.game.switchPlayer();
      } else {
        //Winner - fill the remaining board.
        this.fillRemainingBoard();
      }

      this.setBoardText();
    }
  }
}
