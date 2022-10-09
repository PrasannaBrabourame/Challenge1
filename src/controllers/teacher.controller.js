/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  3.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
 const {
	teacherService
} = require('../services/teacher.service')
const {
	schemaValidator
} = require('../utils/schema.util')
const {
	statusCodes
} = require('../configs/status.config');
/**
 * function used to register the new student / students.
 * @async
 * @function registerStudents
 * @type {POST Method}
 * @param {String} teacher - Teacher Email Address
 * @param {Array} students - Array of students email addresses to register
 * @returns {status} 204 - successfully fulfilled the request No Content Response Required
 */
async function registerStudents(req, res) {
	try {
		let params = req.body
		let schemaValidation = await schemaValidator.registerStudent.validate(params)
		if(schemaValidation.error) {
			throw new Error(statusCodes[4])
		}
		let resRegisterStudent = await teacherService.registerStudent(params)
		if(!resRegisterStudent.success) {
			throw new Error(resRegisterStudent.message)
		}
		return res.sendStatus(204)
	} catch(err) {
		return res.status(400).json({
			message: err.message
		})
	}
}
/**
 * function used to retrieve the list of students for a given teacher or all students based on the parameters passed
 * @async
 * @function retriveStudents
 * @type {GET Method}
 * @param {String} teacher - Teacher Email Address in Query String
 * @returns {Array} students - Array of students email addresses for a given teacher or all students based on the parameters passed
 */
async function retriveStudents(req, res) {
	try {
		let params = req.query
		let schemaValidation = await schemaValidator.retriveStudents.validate(params)
		if(schemaValidation.error) {
			throw new Error(statusCodes[4])
		}
		let resRetriveStudents = await teacherService.retriveStudents(params)
		if(!resRetriveStudents.success) {
			throw new Error(resRetriveStudents.message)
		}
		return res.status(200).json(resRetriveStudents.data)
	} catch(err) {
		return res.status(400).json({
			message: err.message
		})
	}
}
/**
 * function used to suspend a specified student
 * @async
 * @function suspendStudent
 * @type {POST Method}
 * @param {String} teacher - Teacher Email Address in Query String
 * @param {Array} students - Array of students email addresses to register
 * @returns {status} 204 - successfully fulfilled the request No Content Response Required
 */
async function suspendStudent(req, res) {
	try {
		let params = req.body
		let schemaValidation = await schemaValidator.suspendStudent.validate(params)
		if(schemaValidation.error) {
			throw new Error(statusCodes[4])
		}
		let resSuspendStudent = await teacherService.suspendStudent(params)
		if(!resSuspendStudent.success) {
			throw new Error(resSuspendStudent.message)
		}
		return res.sendStatus(204)
	} catch(err) {
		return res.status(400).json({
			message: err.message
		})
	}
}
module.exports = {
	registerStudents,
	retriveStudents,
	suspendStudent
};