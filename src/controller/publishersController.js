import publishers from '../model/Publisher.js'

export default class PublisherController {

    static findPublishers = (req, res) => {
        publishers.find((err, allPublishers) => {
            res.status(200).json(allPublishers)
        })
    }

    static findPublisherById = (req, res) => {
        const { id } = req.params
        publishers.findById(id, (err, publisher) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - id not found.` })
            } else {
                res.status(200).send(publisher)
            }
        })
    }

    static registerPublisher = (req, res) => {
        const publisher = new publishers(req.body)
        publisher.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - register publisher failed.` })
            } else {
                res.status(201).send(publisher.toJSON())
            }
        })
    }

    static updatePublisher = (req, res) => {
        const { id } = req.params
        publishers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: `Publisher ${id} has been updated.` })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deletePublisher = (req, res) => {
        const { id } = req.params
        publishers.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `The publisher ${id} has been deleted.` })
            } else {
                res.status(500).send({ message: 'Delete failed.' })
            }
        })
    }
}