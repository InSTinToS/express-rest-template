import { BooksRepository } from '@modules/Books/repositories/BooksRepository'
import { IBooksRepository } from '@modules/Books/repositories/IBooksRepository.types'

import { container } from 'tsyringe'

container.registerSingleton<IBooksRepository>(
  'BooksRepository',
  BooksRepository
)
