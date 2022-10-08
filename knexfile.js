// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 const dbConfig = require('./src/configs/db.config')

 module.exports = {
     development: dbConfig
 };
