
const express = require('express')
const port = process.env.PORT || 4000

const app = express()
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/views/index.html')
})

app.get('/signin', (req, res) => {
   res.sendFile(__dirname + '/views/signin.html')
})

app.get('/about', (req, res) => {
   res.sendFile(__dirname + '/views/about.html')
})

app.listen(port)

module.exports = {
   app
}