import { THandle } from './ReadBooks.types'
import { ReadBooksService } from './ReadBooksService'

import { container } from 'tsyringe'

class ReadBooksController {
  handle: THandle = async (req, res) => {
    const id = req.params.id

    const readBooksService = container.resolve(ReadBooksService)

    const books = await readBooksService.execute(id)

    res.json(books)
  }
}

export { ReadBooksController }
