import { BookModel } from '../models/BookModel'
import { IBooksRepository } from './IBooksRepository.types'

class BooksRepository implements IBooksRepository {
  private books: BookModel[] = []

  create: IBooksRepository['create'] = async data => {
    const newBook = new BookModel()

    Object.assign(newBook, data)

    this.books.push(newBook)

    return newBook
  }

  findAll: IBooksRepository['findAll'] = async () => this.books
}

export { BooksRepository }
