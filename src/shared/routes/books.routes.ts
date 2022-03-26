import { CreateBookController } from '@modules/Books/useCases/createBook/CreateBookController'
import { ReadBooksController } from '@modules/Books/useCases/readBooks/ReadBooksController'

import { Router } from 'express'

const booksRoutes = Router()

const readBooksController = new ReadBooksController()
const createBookController = new CreateBookController()

booksRoutes.get('/', readBooksController.handle)

booksRoutes.post('/', createBookController.handle)

export { booksRoutes }
