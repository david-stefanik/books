// DEPENDENCIES
const express = require('express')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE







app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Books!')
})


// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

