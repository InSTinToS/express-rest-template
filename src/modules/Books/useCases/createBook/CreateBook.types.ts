import { BookModel } from '@modules/Books/models/BookModel'

import { RequestHandler } from 'express'

interface IRequest extends Omit<BookModel, 'id' | 'created_at'> {}

interface IResponse extends BookModel {}

type THandle = RequestHandler<void, IResponse, IRequest>

type TExecute = (data: IRequest) => Promise<IResponse>

export { THandle, IRequest, IResponse, TExecute }
