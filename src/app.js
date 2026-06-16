import express from 'express'
import morgan from 'morgan'
import teamRoutes from './routes/team.routes.js'

const app = express()

app.use(express.json())

app.use('/teams', teamRoutes)

const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
  app.use(morgan('dev'))
} else {
  app.use(morgan('combined'))
}

export default app
