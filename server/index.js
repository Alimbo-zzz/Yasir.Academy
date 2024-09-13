import express from 'express';
const app = express()
const port = 8080;
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {resolve} from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use('/', express.static( resolve(__dirname, '../dist/') ) ); // путь для всех элементов
app.get('*', (req, res) => {
  res.sendfile(resolve(__dirname, '../dist/index.html'))
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})