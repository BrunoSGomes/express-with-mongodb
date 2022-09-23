import express from 'express'
import booksRouter from './booksRouter.js'
import authorsRouter from './authorsRouter.js'
import publishersRouter from './publishersRouter.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Welcome to the library :)')
    })

    app.use(
        express.json(),
        booksRouter,
        authorsRouter,
        publishersRouter
    )
}

export default routes