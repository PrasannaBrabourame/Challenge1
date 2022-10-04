/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  1.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  04 Oct 2022                                                  *
 ********************************************************************************/

 const express = require('express');
 const compression = require('compression')
 const bodyParser = require('body-parser');
 const helmet = require('helmet')
 const app = express();
 const port = process.env.PORT || 3000;

 const teacherRouter = require('./src/routes/teacher.routes');


app.use('/api', teacherRouter);


 
 app.use(bodyParser.json());
 app.use(
     bodyParser.urlencoded({
         extended: true,
     })
 );
 app.use(helmet()); // setting HTTP headers
 app.disable('x-powered-by') // Removing x-powered-by header
 app.use(compression()) // Gzip compression
 
 app.get('/', (req, res) => {
     res.json({
         'message': 'ok'
     });
 })

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