import express from 'express'
import AuthorController from '../controller/authorsController.js'

const authorsRouter = express.Router()

authorsRouter
    .get('/authors', AuthorController.findAuthors)
    .get('/authors/:id', AuthorController.findAuthorById)
    .post('/authors', AuthorController.registerAuthor)
    .put('/authors/:id', AuthorController.updateAuthor)
    .delete('/authors/:id', AuthorController.deleteAuthor)

export default authorsRouter