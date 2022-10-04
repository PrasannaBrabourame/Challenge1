/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  1.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  04 Oct 2022                                                  *
 ********************************************************************************/

const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher.controller');

/* POST Register List of Students */
router.post('/register', teacherController.register);

/* GET Retrive List of Students */
router.get('/commonstudents', teacherController.commonstudents);

/* POST Suspend Particular Student*/
router.post('/suspend', teacherController.suspend);

module.exports = router;