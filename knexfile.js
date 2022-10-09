/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  3.0.0                                                        *
 * Date         :  09 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 const dbConfig = require('./src/configs/db.config')
 module.exports = {
   development: dbConfig
 };