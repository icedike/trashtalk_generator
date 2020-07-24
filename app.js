const express = require('express')
const exhbps = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

app.engine('handlebars', exhbps({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index')
})

app.listen(port, () => {
  console.log('Running server')
})
