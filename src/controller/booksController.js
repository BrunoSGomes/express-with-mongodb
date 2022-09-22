import books from '../model/Book.js'

export default class BookController {

    static findBooks = (req, res) => {
        books.find()
            .populate('author')
            .exec((err, allBooks) => {
                res.status(200).json(allBooks)
            })
    }

    static findBookById = (req, res) => {
        const { id } = req.params
        books.findById(id)
            .populate('author', 'name')
            .exec((err, book) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - id not found.` })
                } else {
                    res.status(200).send(book)
                }
            })
    }

    static registerBook = (req, res) => {
        const book = new books(req.body)
        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - register book failed.` })
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        const { id } = req.params
        books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Book has been updated.' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteBook = (req, res) => {
        const { id } = req.params
        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `The book ${id} has been deleted.` })
            } else {
                res.status(500).send({ message: `Delete failed.` })
            }
        })
    }
}