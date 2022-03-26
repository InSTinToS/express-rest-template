import { booksRoutes } from './books.routes'

import express from 'express'

const app = express()

app.use('/books', booksRoutes)

app.use(express.json())

export { app }
