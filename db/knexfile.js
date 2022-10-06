// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 const dbConfig = require('./config/db.config')

 module.exports = {

  development: dbConfig,


  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
