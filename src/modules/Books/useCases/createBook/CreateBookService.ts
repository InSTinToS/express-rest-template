import { TExecute } from './CreateBook.types'

import { BookModel } from '@modules/Books/models/BookModel'
import { IBooksRepository } from '@modules/Books/repositories/IBooksRepository.types'

import { inject, injectable } from 'tsyringe'

@injectable()
class CreateBookService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository
  ) {}

  execute: TExecute = async data => {
    const newBook = new BookModel()

    Object.assign(newBook, data)

    const createdBook = await this.booksRepository.create(newBook)

    return createdBook
  }
}

export { CreateBookService }
