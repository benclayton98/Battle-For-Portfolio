const express = require('express')
const Gameplay = require('./gameplay')
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.render('welcome.ejs')
})

app.post('/', (req,res) => {
    
    let startGame = new Gameplay()

    res.render('gameplay.ejs', {
        player1Name: req.body.player1Name,
        player2Name: req.body.player2Name,
        hpPlayer1: 100
        
    })


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})