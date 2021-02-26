const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const data = require('./Student_Data.json')

app.get('/allrecords', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})