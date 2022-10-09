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
 const notificationController = require('../controllers/notification.controller');
 /* POST Retrieve a list of students who can receive a given notification */
 router.post('/retrievefornotifications', notificationController.retriveNotification);
 module.exports = router;