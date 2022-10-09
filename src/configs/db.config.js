/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  3.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  08 Oct 2022                                                  *
 ********************************************************************************/
 require('dotenv').config()
 const db = {
     client: 'mysql2',
     connection: {
         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASSWORD,
         database: process.env.DB_NAME,
     }
 }
 module.exports = db;