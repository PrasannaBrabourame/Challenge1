// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 const dbConfig = require('./config/db.config')

 module.exports = {
     development: dbConfig
 };
