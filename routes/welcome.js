const express = require('express')
const router = express.Router()
const Gameplay = require('./../src/gameplay')

router.post("/welcome", (req, res) => {
    let hpPlayer1, hpPlayer2
    let startGame = new Gameplay(hpPlayer1, hpPlayer2);
    hpPlayer1 = startGame.hpPlayer1;
    hpPlayer2 = startGame.hpPlayer2;
    (player1Name = req.body.player1Name),
      (player2Name = req.body.player2Name),
      attackMessage = 'Start Game'
      req.app.locals.startGame = startGame
      res.render("gameplay.ejs", {
        player1Name: player1Name,
        player2Name: player2Name,
        hpPlayer1: hpPlayer1,
        hpPlayer2: hpPlayer2,
        attackMessage: attackMessage,
      });
  });

module.exports = router