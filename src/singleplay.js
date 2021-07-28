let cpuGo;

class SingleGame {
  constructor(hpPlayer1 = 100, CPU = 100) {
    this.go = true;
    this.hpPlayer1 = hpPlayer1;
    this.CPU = CPU;
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

// math.random = if between 0 and 2, normal attack, if between 2 and 4 paralyse etc..


  randomPlayer() {
      cpuGo = Math.random()
      this.CPU = this.reducePoint(this.CPU);
      
      if(cpu<0.7){
      this.hpPlayer1 = this.reducePoint(this.hpPlayer1)
      }
      else if(cpu<0.8){
          this.hpPlayer1.paralyse()
      }
      else if(cpu<0.9){
          this.hpPlayer1.poison()
      }
      else if(cpu<1){
          this.hpPlayer1.heal()
      }
      
      if (this.CPU == "you lose") {
        this.hpPlayer1 = "you win";
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
        this.CPU = "you win";
      }
    } 
  else {
      this.CPU = this.reducePoint(this.CPU);
      
      if(paralyseChance<0.1){
        this.go=false;
      }
      else{
      this.go = true;}
      if (this.CPU == "you lose") {
        this.hpPlayer1 = "you win";
      }
    }
  }

  poison() {
    poisonChance = Math.random()
    if (this.go) {
      this.hpPlayer1 = this.reducePoint(this.hpPlayer1);

      if(poisonChance<0.2){
        this.CPU = this.CPU - 3;
        this.go=false;
      }
      else{
      this.go = false;}

      if (this.hpPlayer1 == "you lose") {
        this.CPU = "you win";
      }
    } 
  else {
      this.CPU = this.reducePoint(this.CPU);
      
      if(poisonChance<0.2){
        this.hpPlayer1 = this.hpPlayer1 - 3;
        this.go=true;
      }
      else{
      this.go = true;}
      if (this.CPU == "you lose") {
        this.hpPlayer1 = "you win";
      }
    }
  }

  heal() {
    if (this.go) {
      this.hpPlayer1 = this.reducePoint(this.hpPlayer1);
      this.CPU = this.CPU + 4;
      
      this.go = false;

      if (this.hpPlayer1 == "you lose") {
        this.CPU = "you win";
      }
    } 
  else {
      this.CPU = this.reducePoint(this.CPU);

      this.hpPlayer1 = this.hpPlayer1 + 4;
      
      this.go = true;
      if (this.CPU == "you lose") {
        this.hpPlayer1 = "you win";
      }
    }
  }


  printAttacker(player1, player2) {
    if (this.go) {
      return `${player1} attacked CPU`;
    } else {
      return `CPU attacked ${player1}`;
    }
  }
}

module.exports = SingleGame;
