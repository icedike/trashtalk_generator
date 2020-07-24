const express = require('express')
const exhbps = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generateTalk')

const app = express()

const port = 3000

app.engine('handlebars', exhbps({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const trashTalk = generateTalk(option)
  res.render('index', { trashTalk })
})

app.listen(port, () => {
  console.log('Running server')
})
