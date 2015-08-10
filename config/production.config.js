/**
 * Constants definition
 */

const env = process.env

export default {
	locale: env.LOCALE,
	port: env.PORT,
	mongoUrl: env.MONGO_URL,
	mandrillToken: env.MANDRILL_TOKEN,
  accessToken: env.ACCESS_TOKEN,
  organizationName: env.ORGANIZATION_NAME
}
