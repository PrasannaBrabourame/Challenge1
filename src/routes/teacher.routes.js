/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  3.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
 const express = require('express');
 const router = express.Router();
 const teacherController = require('../controllers/teacher.controller');
 /* POST Register List of Students */
 router.post('/register', teacherController.registerStudents);
 /* GET Retrive List of Students */
 router.get('/commonstudents', teacherController.retriveStudents);
 /* POST Suspend Particular Student*/
 router.post('/suspend', teacherController.suspendStudent);
 module.exports = router;