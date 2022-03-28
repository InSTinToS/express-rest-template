import { BookModel } from '../models/BookModel'

type TCreate = (data: BookModel) => Promise<BookModel>

type TFindAll = () => Promise<BookModel[] | any[]>

interface IBooksRepository {
  create: TCreate
  findAll: TFindAll
}

export { IBooksRepository }
