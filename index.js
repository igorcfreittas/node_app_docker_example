const express = require('express')
const Constants = require('./constants')
const log = require('log-beautify')

const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  log.info(`Example app listening on port ${Constants.PORT}`)
})