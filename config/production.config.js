/**
 * Constants definition
 */

const env = process.env

export default {
  locale: env.LOCALE,
  port: env.PORT,
  mongoUrl: env.MONGO_URL,
  accessToken: env.ACCESS_TOKEN,
  organizationName: env.ORGANIZATION_NAME,
  organizationEmail: env.ORGANIZATION_EMAIL,
  mailer: {
    service: env.MAILER_SERVICE,
    auth: {
      user: env.MAILER_AUTH_USER,
      pass: env.MAILER_AUTH_PASS
    }
  }
}
