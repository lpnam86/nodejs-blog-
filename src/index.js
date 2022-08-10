const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded())
app.use(express.urlencoded())

//day la nam
//http logger
// app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set(
  'view engine', 'hbs'
)

app.set('views', path.join(__dirname, 'resources/views'));

app.get('/s', (req, res) => {
  res.send('Hello')
})
//Routes init
route(app)


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})   