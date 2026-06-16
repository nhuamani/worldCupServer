import fs from 'fs'
import morgan from 'morgan'
import path from 'path'

const logStream = fs.createWriteStream(path.resolve('logs/access.log'), {
  flags: 'a',
})

export const morganLogger = morgan('combined', {
  stream: logStream,
})
