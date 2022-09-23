import express from 'express'
import PublisherController from '../controller/publishersController.js'

const publishersRouter = express.Router()

publishersRouter
    .get('/publishers', PublisherController.findPublishers)
    .get('/publishers/:id', PublisherController.findPublisherById)
    .post('/publishers', PublisherController.registerPublisher)
    .put('/publishers/:id', PublisherController.updatePublisher)
    .delete('/publishers/:id', PublisherController.deletePublisher)

export default publishersRouter