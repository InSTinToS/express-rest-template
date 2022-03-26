import { BookModel } from '@modules/Books/models/BookModel'

import { RequestHandler } from 'express'

interface IParams {
  id?: string
}

type TResponse = BookModel[] | BookModel

type TExecute = (id: IParams['id']) => Promise<TResponse>

type THandle = RequestHandler<IParams, TResponse, void>

export { TExecute, THandle }
