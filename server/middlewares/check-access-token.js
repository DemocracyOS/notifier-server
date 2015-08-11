/**
 * Module Dependencies
 */

import config from 'config'


export default function checkAccessToken(req, res, next) {
  var accessToken = req.query.access_token;

  if (!accessToken) {
    return res.send(400, {message: 'access_token is missing'});
  }

  if (accessToken !== config.accessToken) {
    return res.send(403, {message: 'access_token is wrong'});
  }

  next();
}