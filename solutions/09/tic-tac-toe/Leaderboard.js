"use strict";

//Model for Leaderboard
export class Leaderboard {
  static leaderboard = "Leaderboard";
  static Entry = class {
    constructor(name, won, lost) {
      this.name = name;
      this.won = won;
      this.lost = lost;
    }
  };

  constructor() {
    //Array for leaderboard
    this.entries = [];
    //Read the local browser storage and sort the array.
    this.readStorage();
    this.sort();
  }

  //Method to create a few dummy entries in the leaderboard
  createDummies() {
    this.entries.push(new Leaderboard.Entry("Max", 10, 5));
    this.entries.push(new Leaderboard.Entry("Moritz", 20, 13));
    this.entries.push(new Leaderboard.Entry("July", 5, 7));
    this.entries.push(new Leaderboard.Entry("Maria", 20, 0));
  }

  //Method to read the leaderboard from the local browser storage
  readStorage() {
    this.entries = JSON.parse(localStorage.getItem(Leaderboard.leaderboard));
    if (this.entries === null) {
      //If the leaderboard does not yet exist in the local browser storage, create an empty array.
      this.entries = [];
    }
  }

  //Method to write the leaderboard to the local browser storage
  writeStorage() {
    localStorage.setItem(Leaderboard.leaderboard, JSON.stringify(this.entries));
  }

  //Method to delete the leaderboard from the local browser storage
  deleteStorage() {
    localStorage.removeItem(Leaderboard.leaderboard);
  }

  //Method to sort the leaderboard
  sort() {
    if (this.entries != null) {
      //The leaderboard is sorted by the difference of won and lost games in decending order.
      //Players with the same "score" are displayed in random order.
      this.entries.sort((a, b) => b.won - b.lost - (a.won - a.lost));
    }
  }

  //Method to add the winner and loser of a game to the leaderboard.
  addGame(winner, loser) {
    let winnerDone = false;
    let loserDone = false;
    //Run through the complete array...
    for (let i = 0; i < this.entries.length; i++) {
      //... and process the winner...
      if (this.entries[i].name === winner) {
        this.entries[i].won++;
        winnerDone = true;
      }
      //... as well as the loser.
      if (this.entries[i].name === loser) {
        this.entries[i].lost++;
        loserDone = true;
      }
    }

    //The winner is not yet in the leaderboard. Add an entry.
    if (winnerDone === false) {
      this.entries.push(new Leaderboard.Entry(winner, 1, 0));
    }
    //The loser is not yet in the leaderboard. Add an entry.
    if (loserDone === false) {
      this.entries.push(new Leaderboard.Entry(loser, 0, 1));
    }

    //Sort and subsequently write the leaderboard to the local browser storage.
    //Asumming that the number of entries in the leaderboard is low, the performance overhead can be neglected.
    this.sort();
    this.writeStorage();
  }
}
