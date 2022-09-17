import express from 'express'
import db from './config/dbConnect.js'
import books from './model/Book.js'

db.on('error', console.log.bind(console, 'Connection error'))
db.once('open', () => {
    console.log('Connected successfully!')
})

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the library :)')
})

app.get('/books', (req, res) => {
    books.find((err, allBooks) => {
        res.status(200).json(allBooks)
    })
})

app.get('/books/:id', (req, res) => {
    const index = searchBook(req.params.id)
    res.status(200).json(books[index])
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send('The book has been created')
})

app.put('/books/:id', (req, res) => {
    const index = searchBook(req.params.id)
    books[index].title = req.body.title
    res.status(200).json(books[index])
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params
    const index = searchBook(id)
    books.splice(index, 1)
    res.status(200).json(`The book ${id} has been deleted!`)
})

function searchBook(id) {
    return books.findIndex((book) => book.id === +id)
}

export default app