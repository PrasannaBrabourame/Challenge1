/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  3.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
 const {
	notificationService
} = require('../services/notification.service')
const {
	schemaValidator
} = require('../utils/schema.util')
const {
	statusCodes
} = require('../configs/status.config');
/**
 * function used to retrieve a list of students who can receive a given notification
 * @async
 * @function retriveNotification
 * @type {POST Method}
 * @param {String} teacher - Teacher Email Address
 * @param {String} notification - Notication Text Along with email id of students with @mentioned, Students email id is not mandatory
 * @returns {Array}  200 - recipients - Array of students
 */
async function retriveNotification(req, res) {
	try {
		let params = req.body
		let schemaValidation = await schemaValidator.retriveNotification.validate(params)
		if(schemaValidation.error) {
			throw new Error(statusCodes[4])
		}
		let resRetriveNotification = await notificationService.retriveNotification(params)
		if(!resRetriveNotification.success) {
			throw new Error(resRetriveNotification.message)
		}
		return res.status(200).json(resRetriveNotification.data)
	} catch(err) {
		return res.status(400).json({
			message: err.message
		})
	}
}
module.exports = {
	retriveNotification
};