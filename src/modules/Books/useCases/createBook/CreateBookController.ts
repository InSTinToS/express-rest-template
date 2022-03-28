import { THandle } from './CreateBook.types'
import { CreateBookService } from './CreateBookService'

import { container } from 'tsyringe'

class CreateBookController {
  handle: THandle = async (req, res) => {
    const createBookService = container.resolve(CreateBookService)

    const dataToCreate = req.body

    const createdBook = await createBookService.execute(dataToCreate)

    return res.status(201).json(createdBook)
  }
}

export { CreateBookController }
