const express = require("express");
const Gameplay = require("./src/gameplay");
const app = express();
const port = 3000;
const SingleGame = require('./src/singleplay')
const welcomeRouter = require('./routes/welcome.js')
const attackRouter = require('./routes/attack')
const paralyseRouter = require('./routes/paralyse')
const poisonRouter = require ('./routes/poison')
const healRouter = require('./routes/heal')

let player1Name, player2Name, attackMessage;
// let singleGame = new SingleGame(hpPlayer1)

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

app.use('/', welcomeRouter)

app.use('/attack', attackRouter)

app.use('/paralyse', paralyseRouter)

app.use('/poison', poisonRouter)

app.use('/heal', healRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
