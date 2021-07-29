const express = require('express')
const router = express.Router()

router.post("/", (req, res) => {
    let startGame = req.app.locals.startGame
    startGame.poison();
    attackMessage = startGame.printAttacker(player1Name, player2Name);
    res.render("gameplay.ejs", {
      player1Name: player1Name,
      player2Name: player2Name,
      hpPlayer1: startGame.hpPlayer1,
      hpPlayer2: startGame.hpPlayer2,
      attackMessage: attackMessage,
    });
  });

  module.exports = router