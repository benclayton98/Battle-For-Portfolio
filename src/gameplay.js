class Gameplay {
  constructor(hpPlayer1 = 100, hpPlayer2 = 100) {
    this.go = true;
    this.hpPlayer1 = hpPlayer1;
    this.hpPlayer2 = hpPlayer2;
  }
  // setHpPoint() {
  //   return 100;
  // }

  reducePoint(value) {
    while (value > 0) {
      const total = value - Math.floor(Math.random() * 11);
      if (total < 0) {
        break;
      }
      return total;
    }
    return "you lose";
  }

  randomPlayer() {
    if (this.go) {
      this.hpPlayer1 = this.reducePoint(this.hpPlayer1);
      // window.alert("Player 1 attacked Player 2");
      this.go = false;
      if (this.hpPlayer1 == "you lose") {
        this.hpPlayer2 = "you win";
      }
    } else {
      this.hpPlayer2 = this.reducePoint(this.hpPlayer2);
      // window.alert("Player 2 attacked Player 1");
      this.go = true;
      if (this.hpPlayer2 == "you lose") {
        this.hpPlayer1 = "you win";
      }
    }
    // return { hpPlayer1, hpPlayer2 };
  }

  printAttacker(player1, player2) {
    if (this.go) {
      return `${player1} attacked ${player2}`;
    } else {
      return `${player2} attacked ${player1}`;
    }
  }
}

module.exports = Gameplay;
