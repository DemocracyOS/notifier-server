/**
 * Constants definition
 */

const env = process.env.NODE_ENV || 'development';

module.exports = require(`./${env}.config.js`);
