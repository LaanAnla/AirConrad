const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/mentions', (req, res) => {
  res.render('pages/mentions')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})