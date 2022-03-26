import { TExecute } from './ReadBooks.types'

import { BooksRepository } from '@modules/Books/repositories/BooksRepository'

class ReadBooksService {
  execute: TExecute = async () => {
    const booksRepository = new BooksRepository()

    const books = await booksRepository.findAll()

    return books
  }
}

export { ReadBooksService }
