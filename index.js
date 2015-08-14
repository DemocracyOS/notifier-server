/**
 * Module Dependencies
 */

import app from './server'
import config from './config'
import debug from 'debug'

/**
 * Constants definition
 */

const log = debug('democracyos:notifier-server')
const port = config.port || 9001

app.listen(port, () => {
  log(`App started at port ${port}`)
})
