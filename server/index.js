const express = require('express');
const {resolve} = require('path');
const app = express()
const port = 3030;


app.use('/', express.static( resolve(__dirname, '../dist/') ) ); // путь для всех элементов
app.get('*', (req, res) => {
  res.sendfile(resolve(__dirname, '../dist/index.html'))
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})