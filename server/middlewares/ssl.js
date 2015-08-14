/**
 * Module Dependencies
 */

import debug from 'debug'

/**
 * Constants definition
 */

const log = debug('democracyos:notifier-server:ssl')
const env = process.env.NODE_ENV
const prod = env === 'production'

/**
 * Force load with https on parameter environments (defaults to production)
 * https://devcenter.heroku.com/articles/http-routing#heroku-headers
 *
 * Orignal function from https://github.com/paulomcnally/node-heroku-ssl-redirect
 *
 * WARNING: only use in a heroku (or other reverse-proxy) environments
 */

//TODO: replace this with `ssl` module from `DemocracyOS/app`

export default function herokuSslRedirect(req, res, next) {
  const https = req.headers['x-forwarded-proto'] === 'https'
  if (!prod || https) return next()

  const redirectionUrl = `https://${req.host}${req.originalUrl}`
  log(`About to force redirection to ${redirectionUrl}`)
  res.redirect(redirectionUrl)
}
