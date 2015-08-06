/**
 * Module Dependencies
 */

import { cors, ssl } from './middlewares'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import methodOverride from 'method-override'
import express from 'express'

/**
 * Constants definition
 */

const app = express()

/**
 * Bind middlewares
 */

app.use(ssl)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors)
app.use(methodOverride())

export default app
