import express from 'express'
import BookController from '../controller/booksController.js'

const booksRouter = express.Router()

booksRouter
    .get('/books', BookController.findBooks)
    .get('/books/:id', BookController.findBookById)
    .post('/books', BookController.registerBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook)

export default booksRouter