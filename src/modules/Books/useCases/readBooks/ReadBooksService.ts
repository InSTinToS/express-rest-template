import { TExecute } from './ReadBooks.types'

import { IBooksRepository } from '@modules/Books/repositories/IBooksRepository.types'

import { inject, injectable } from 'tsyringe'

@injectable()
class ReadBooksService {
  constructor(
    @inject('BooksRepository')
    private booksRepository: IBooksRepository
  ) {}

  execute: TExecute = async () => {
    const books = await this.booksRepository.findAll()

    return books
  }
}

export { ReadBooksService }
