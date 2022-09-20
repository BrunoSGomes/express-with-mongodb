import books from '../model/Book.js'

class BookController {

    static listBooks = (req, res) => {
        books.find((err, allBooks) => {
            res.status(200).json(allBooks)
        })
    }

}

export default BookController