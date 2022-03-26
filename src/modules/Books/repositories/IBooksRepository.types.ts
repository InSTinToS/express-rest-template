import { BookModel } from '../models/BookModel'

type TCreate = (data: Omit<BookModel, 'id' | 'createdAt'>) => Promise<BookModel>

type TFindAll = () => Promise<BookModel[] | any[]>

interface IBooksRepository {
  create: TCreate
  findAll: TFindAll
}

export { IBooksRepository }
