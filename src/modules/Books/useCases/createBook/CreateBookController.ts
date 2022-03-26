import { THandle } from './CreateBook.types'
import { CreateBookService } from './CreateBookService'

class CreateBookController {
  handle: THandle = async (req, res, next) => {
    const createBookService = new CreateBookService()
    const dataToCreate = req.body
    createBookService.execute(dataToCreate)
  }
}

export { CreateBookController }
