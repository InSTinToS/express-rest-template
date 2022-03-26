import { BookModel } from '../models/BookModel'
import { IBooksRepository } from './IBooksRepository.types'

import { database } from '@config/connectToPostgres'

class BooksRepository implements IBooksRepository {
  create: IBooksRepository['create'] = async data => {
    await database.connect()

    const query = `INSERT INTO books (name, author) VALUES (${data.name}, ${data.author})`

    const createdBook = (await database.query<BookModel>(query)).rows[0]

    return createdBook
  }

  findAll: IBooksRepository['findAll'] = async () => {
    await database.connect()

    const query = 'SELECT * FROM books'

    const allBooks = (await database.query<BookModel[]>(query)).rows

    return allBooks
  }
}

export { BooksRepository }
