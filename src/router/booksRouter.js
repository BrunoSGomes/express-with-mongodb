import express from 'express'
import BookController from '../controller/booksController.js'

const router = express.Router()

router
    .get('/books', BookController.listBooks)

export default router