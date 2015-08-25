import { cors, ssl, checkAccessToken, validateEvent } from 'server/middlewares'
import bodyParser from 'body-parser'
import config from 'config'
import cookieParser from 'cookie-parser'
import debug from 'debug'
import methodOverride from 'method-override'
import express from 'express'
import pack from 'package'
import notifier from 'democracyos-notifier'

/**
 * Constants definition
 */

const app = express()
const log = debug('democracyos:notifier-server:app')

/**
 * Bind middlewares
 */

app.use(ssl)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors)
app.use(methodOverride())

app.get('/', function (req, res) {
  res.json({app: pack.name, env: process.env.NODE_ENV, port: config.port, version: pack.version, apiUrl: '/api'})
})

app.post('/api/events', checkAccessToken, validateEvent, (req, res) => {
  const { event } = req.body

  notifier.notify(req.body, (err) => {
    if (err) {
      log('Error when sending notification for event %s: %j', event, err);
      return res.status(500).send(err);
    }

    log(`Success on ${event}`);
    res.sendStatus(201)
  })
})

const opts = {
  mongoUrl: config.mongoUrl,
  organizationName: config.organizationName,
  organizationEmail: config.organizationEmail,
  mandrillToken: config.mandrillToken,
  mailer: config.mailer
}

const httpListen = app.listen
app.listen = function listen(port, callback) {
  log('About to start embedded notifier notifier with options: %j', opts)

  notifier(opts, function (err) {
    if (err) return log('Unexpected error while starting embedded notifications service: %s', err)

    log('Embedded notifications service started')
    httpListen.call(app, port, callback)
  })
}

export default app
