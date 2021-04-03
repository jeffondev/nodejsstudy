const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/jinho', function (req, res) {
  console.log('Accessing the secret section ...');
  res.send('Hello jinho!')
})

app.post('/jinho', (req, res) => {
  res.send('post Hello jinho!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})