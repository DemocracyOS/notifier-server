
1.0.0rc / 2015-08-25
====================

  * add nodemailer
  * fix ssl redirection, only when protocol is http
  * log forwarding header for debugging
  * fix debug scope of ssl middleware
  * fix typo
  * [config] - Add organizationEmail config parameter
  * [config] - Add organizationName config parameter
  * Update repositories, contact and description in package.json
  * Update status codes for error responses (40x)
  * Remove 'engines' declaration from package.json
  * Update Procfile
  * Remove unncesary directories and files. Rewrite config module.
  * Rewrite notifier-server to use democracyos-notifier
  * Start rewriting notifier-server
  * Update version compatibility warning
  * Bump to 0.3.1
  * Fix RESET_PASSWORD_URL on templates Closes #37
  * Release 0.3.0
  * [topic] - Rename law to topic. Closes #35
  * [topic-published] - Update feed to new forum and topic format #35
  * [topic-commented] - Update feed to new forum and topic format #35
  * [topic-voted] - Update feed to new forum and topic format #35
  * Release 0.2.1
  * [feed] - Add feededAt attribute on model

0.3.1 / 2015-06-11
==================

  * Fix RESET_PASSWORD_URL on templates #37

0.3.0 / 2015-06-02
==================

  * Rename law to topic. Closes #35
  * Update feed to new forum and topic format #35

0.2.1 / 2015-03-25
==================

  * Add feededAt attribute on feed model

0.2.0 / 2015-03-19
==================

 * Add HTTP->HTTPS redirection for heroku

0.1.11 / 2015-03-12
==================

 * Update some translations

0.1.10 / 2015-03-11
==================

 * add 'deploymentId' on 'law-published' feeds

0.1.9 / 2015-03-06
==================

  * [update-feed] - Fix getting instance url from action

0.1.8 / 2015-03-06
==================

  * [law-commented] - Add a new feed story when 'law-commented' is received
  * [law-voted] - Add a new feed story when 'law-voted' is received

0.1.7 / 2015-02-26
==================

  * Add saving new feed for new published law

0.1.6 / 2015-01-28
==================

 * Add russian translation

0.1.5 / 2015-01-22
==================

 * Update configuration default aliases from user->citizens to user->users

0.1.4 / 2015-01-17
==================

 * Add Galician translation
 * Add Ukrainian transolation
 * added uk.json support
 * Remove non-user database access for 'law-published' event. Closes #22
 * Change MONGO_CONNECTION to MONGO_URL. Closes #23
 * Add app port to '/' response JSON

0.1.3 / 2014-12-07
==================

 * Add German, Dutch and Portuguese translations
 * Remove 'DemocracyOS' from mail subjects
 * Fix existing translations
 * Add PORT variable to config

0.1.2 / 2014-12-04
==================

 * remove unneeded data from argument-replies flow #9
 * update codebase to version 0.1.0 of likeastore/notifier

0.1.1 / 2014-12-01
==================

 * Add support for notifying 'law-published' and fix 'reply-comment'. Closes #17
 * Update texts for 'reply-argument' event and template
 * Notify user on reply argument only if he has enabled it in their notifications preferences #7
 * Add reply-argument notification
 * Add 'resend-validation-email' handler, as it's the same as the 'signup' one
 * Refactor app.js and make event handling logic self-contained
 * Add basic app.js
 * Update README.md with description on collection name aliasing
 * Add debug dep and update makefile
 * Add support for aliasing db collection names
 * Add flexibility for 'name' property definition in users
 * Fetch port optionally from config file
 * Fix mail template not escaping HTML
 * Update welcome-email subject and tempalte
 * Update welcome-email template and translations
 * Add translations engine
 * Fix template vars usage to be uncoupled from mandrill
 * Fix welcome flow
 * Add basic templates
 * Add dev settings to `.gitignore`
