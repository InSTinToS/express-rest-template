import { TExecute } from './CreateBook.types'

import { BookModel } from '@modules/Books/models/BookModel'
import { BooksRepository } from '@modules/Books/repositories/BooksRepository'

class CreateBookService {
  execute: TExecute = async data => {
    const newBook = new BookModel()
    const booksRepository = new BooksRepository()

    Object.assign(newBook, data)

    const createdBook = await booksRepository.create(newBook)

    return createdBook
  }
}

export { CreateBookService }
