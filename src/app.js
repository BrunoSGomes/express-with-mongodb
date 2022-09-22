import express from 'express'
import db from './config/dbConnect.js'
import routes from './router/index.js'

db.on('error', console.log.bind(console, 'Connection error'))
db.once('open', () => {
    console.log('Connected successfully!')
})

const app = express()

routes(app)

export default app