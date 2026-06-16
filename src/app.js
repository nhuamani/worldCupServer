import express from 'express'
import morgan from 'morgan'

const app = express()

const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
  app.use(morgan('dev'))
} else {
  app.use(morgan('combined'))
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app
