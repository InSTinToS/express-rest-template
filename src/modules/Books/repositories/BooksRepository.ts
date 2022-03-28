import { BookModel } from '../models/BookModel'
import { IBooksRepository } from './IBooksRepository.types'

import { connectToDB } from '@config/connectToDB'

class BooksRepository implements IBooksRepository {
  create: IBooksRepository['create'] = async data => {
    const database = await connectToDB()

    const query = `
    INSERT INTO books 
      (id, created_at, name, author) 
    VALUES
      ('${data.id}', '${data.created_at}', '${data.name}', '${data.author}')
    `

    const createdBook = (await database.query<BookModel>(query)).rows[0]

    return createdBook
  }

  findAll: IBooksRepository['findAll'] = async () => {
    const database = await connectToDB()

    const query = 'SELECT * FROM books'

    const allBooks = (await database.query<BookModel[]>(query)).rows

    return allBooks
  }
}

export { BooksRepository }
