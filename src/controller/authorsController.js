import authors from '../model/Author.js'

export default class AuthorController {

    static findAuthors = (req, res) => {
        authors.find((err, allAuthors) => {
            res.status(200).json(allAuthors)
        })
    }

    static findAuthorById = (req, res) => {
        const { id } = req.params
        authors.findById(id, (err, author) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - id not found.` })
            } else {
                res.status(200).send(author)
            }
        })
    }

    static registerAuthor = (req, res) => {
        const author = new authors(req.body)
        author.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - register author failed.` })
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static updateAuthor = (req, res) => {
        const { id } = req.params
        authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Author has been updated.' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deleteAuthor = (req, res) => {
        const { id } = req.params
        authors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: `The author ${id} has been deleted.` })
            } else {
                res.status(500).send({ message: 'Delete failed.' })
            }
        })
    }
}