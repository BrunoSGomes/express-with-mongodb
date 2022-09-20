import express from 'express'
import router from './booksRouter.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Welcome to the library :)')
    })

    app.use(
        express.json(),
        router
    )
}

export default routes