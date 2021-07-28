const express = require("express");
const Gameplay = require("./src/gameplay");
const app = express();
const port = 3000;
const SingleGame = require('./src/singleplay')

let hpPlayer1, hpPlayer2, player1Name, player2Name, attackMessage;
let startGame = new Gameplay(hpPlayer1, hpPlayer2);
let singleGame = new SingleGame(hpPlayer1)

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("singleplay.ejs");
});

app.get("/welcome", (req, res) => {
  res.render("welcome.ejs");
});

app.get("/welcome", (req, res) => {
  res.render("singlegame.ejs");
});

app.post("/single", (req, res) => {
  res.render("spgameplay.ejs");
});

app.post("/welcome", (req, res) => {
  hpPlayer1 = startGame.hpPlayer1;
  hpPlayer2 = startGame.hpPlayer2;
  (player1Name = req.body.player1Name),
    (player2Name = req.body.player2Name),
    attackMessage = 'Start Game'
    res.render("gameplay.ejs", {
      player1Name: player1Name,
      player2Name: player2Name,
      hpPlayer1: hpPlayer1,
      hpPlayer2: hpPlayer2,
      attackMessage: attackMessage,
    });
});

app.post("/attack", (req, res) => {
  startGame.randomPlayer();
  attackMessage = startGame.printAttacker(player1Name, player2Name);
  // hpPlayer2 = startGame.randomPlayer(hpPlayer1, hpPlayer2);
  res.render("gameplay.ejs", {
    player1Name: player1Name,
    player2Name: player2Name,
    hpPlayer1: startGame.hpPlayer1,
    hpPlayer2: startGame.hpPlayer2,
    attackMessage: attackMessage,
  });
});

app.post("/paralyse", (req, res) => {
  startGame.paralyse();
  attackMessage = startGame.printAttacker(player1Name, player2Name);
  // hpPlayer2 = startGame.randomPlayer(hpPlayer1, hpPlayer2);
  res.render("gameplay.ejs", {
    player1Name: player1Name,
    player2Name: player2Name,
    hpPlayer1: startGame.hpPlayer1,
    hpPlayer2: startGame.hpPlayer2,
    attackMessage: attackMessage,
  });
});

app.post("/poison", (req, res) => {
  startGame.poison();
  attackMessage = startGame.printAttacker(player1Name, player2Name);
  // hpPlayer2 = startGame.randomPlayer(hpPlayer1, hpPlayer2);
  res.render("gameplay.ejs", {
    player1Name: player1Name,
    player2Name: player2Name,
    hpPlayer1: startGame.hpPlayer1,
    hpPlayer2: startGame.hpPlayer2,
    attackMessage: attackMessage,
  });
});

app.post("/heal", (req, res) => {
  startGame.heal();
  attackMessage = startGame.printAttacker(player1Name, player2Name);
  // hpPlayer2 = startGame.randomPlayer(hpPlayer1, hpPlayer2);
  res.render("gameplay.ejs", {
    player1Name: player1Name,
    player2Name: player2Name,
    hpPlayer1: startGame.hpPlayer1,
    hpPlayer2: startGame.hpPlayer2,
    attackMessage: attackMessage,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
