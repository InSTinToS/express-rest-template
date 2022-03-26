import { THandle } from './ReadBooks.types'
import { ReadBooksService } from './ReadBooksService'

class ReadBooksController {
  handle: THandle = async (req, res) => {
    const id = req.params.id

    const readBooksService = new ReadBooksService()

    const books = await readBooksService.execute(id)

    res.json(books).status(200)
  }
}

export { ReadBooksController }
