import express from 'express'
import * as db from './configs/database.js'

console.log(db)

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
