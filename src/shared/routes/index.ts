import { booksRoutes } from './books.routes'
import { errorHandler } from './error.routes'

import express from 'express'

const app = express()

app.use(express.json())

app.use('/books', booksRoutes)

app.use(errorHandler)

export { app }
