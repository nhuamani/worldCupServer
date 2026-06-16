import express from 'express'
import { testConnection } from './configs/database.js'

testConnection()

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server app listening on port http://localhost:${port}`)
})
