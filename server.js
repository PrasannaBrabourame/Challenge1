/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  2.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
 const express = require('express')
 const compression = require('compression')
 const bodyParser = require('body-parser')
 const helmet = require('helmet')
 const app = express()
 const morgan = require('morgan')
 const port = process.env.PORT
 const teacherRouter = require('./src/routes/teacher.routes')
 const notificationRouter = require('./src/routes/notification.routes')
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true,
 }));
 app.use(morgan('common', {
     skip: function(req, res) {
         return res.statusCode < 400
     },
     stream: __dirname + '/logger/morgan.log'
 })); // Morgan Logger
 app.use(helmet()); // setting HTTP headers
 app.disable('x-powered-by') // Removing x-powered-by header
 app.use(compression()) // Gzip compression
 app.get('/', (req, res) => {
     res.json({
         'message': 'ok'
     });
 })
 app.use('/api', teacherRouter);
 app.use('/api', notificationRouter);
 /* Error handler middleware for Status 404 */
 app.use((req, res, next) => {
         res.status(404).send("Sorry can't find that!")
 })
     /* Error handler middleware for Status 500 */
 app.use((err, req, res, next) => {
     console.error(err.stack)
     res.status(500).send('Something broke!')
 })
 app.listen(port, '0.0.0.0', () => {
     console.log(`Example app listening at http://localhost:${port}`)
 });