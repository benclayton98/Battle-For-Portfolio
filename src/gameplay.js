let paralyseChance, poisonChance;

class Gameplay {
  constructor(hpPlayer1 = 100, hpPlayer2 = 100) {
    this.go = true;
    this.hpPlayer1 = hpPlayer1;
    this.hpPlayer2 = hpPlayer2;
  }

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
      this.go = false;
      if (this.hpPlayer1 == "you lose") {
        this.hpPlayer2 = "you win";
      }
    } else {
      this.hpPlayer2 = this.reducePoint(this.hpPlayer2);
      this.go = true;
      if (this.hpPlayer2 == "you lose") {
        this.hpPlayer1 = "you win";
      }
    }
  }

  paralyse() {
    paralyseChance = Math.random()
    if (this.go) {
      this.hpPlayer1 = this.reducePoint(this.hpPlayer1);

      if(paralyseChance<0.1){
        this.go=true;
      }
      else{
      this.go = false;}

      if (this.hpPlayer1 == "you lose") {
        this.hpPlayer2 = "you win";
      }
    } 
  else {
      this.hpPlayer2 = this.reducePoint(this.hpPlayer2);
      
      if(paralyseChance<0.1){
        this.go=false;
      }
      else{
      this.go = true;}
      if (this.hpPlayer2 == "you lose") {
        this.hpPlayer1 = "you win";
      }
    }
  }

  poison() {
    poisonChance = Math.random()
    if (this.go) {
      this.hpPlayer1 = this.reducePoint(this.hpPlayer1);

      if(poisonChance<0.2){
        this.hpPlayer2 = this.hpPlayer2 - 3;
        this.go=false;
      }
      else{
      this.go = false;}

      if (this.hpPlayer1 == "you lose") {
        this.hpPlayer2 = "you win";
      }
    } 
  else {
      this.hpPlayer2 = this.reducePoint(this.hpPlayer2);
      
      if(poisonChance<0.2){
        this.hpPlayer1 = this.hpPlayer1 - 3;
        this.go=true;
      }
      else{
      this.go = true;}
      if (this.hpPlayer2 == "you lose") {
        this.hpPlayer1 = "you win";
      }
    }
  }

  heal() {
    if (this.go) {
      this.hpPlayer1 = this.reducePoint(this.hpPlayer1);
      this.hpPlayer2 = this.hpPlayer2 + 4;
      
      this.go = false;

      if (this.hpPlayer1 == "you lose") {
        this.hpPlayer2 = "you win";
      }
    } 
  else {
      this.hpPlayer2 = this.reducePoint(this.hpPlayer2);

      this.hpPlayer1 = this.hpPlayer1 + 4;
      
      this.go = true;
      if (this.hpPlayer2 == "you lose") {
        this.hpPlayer1 = "you win";
      }
    }
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
