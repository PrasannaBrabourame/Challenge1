/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  1.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  07 Oct 2022                                                  *
 ********************************************************************************/
 const {
    teacherService
} = require('../services/teacher.service')
const {
    schemaValidator
} = require('../utils/schema.util')


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
        if (schemaValidation.error) {
            throw schemaValidation.error.message
        }
        let resRegisterStudent = await teacherService.registerStudent(params)
        if (!resRegisterStudent.success) {
            throw resRegisterStudent.message
        }
        return res.sendStatus(204)
    } catch (err) {
        return res.status(400).json({
            message: err.message ? err.message : err
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
        if (schemaValidation.error) {
            throw schemaValidation.error.message
        }
        let resRetriveStudents = await teacherService.retriveStudents(params)
        return res.status(200).json(resRetriveStudents.data)
    } catch (err) {
        return res.status(400).json({
            message: err.message ? err.message : err
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
        if (schemaValidation.error) {
            throw schemaValidation.error.message
        }
        let resSuspendStudent = await teacherService.suspendStudent(params)
        if (!resSuspendStudent.success) {
            throw resSuspendStudent.message
        }
        return res.sendStatus(204)
    } catch (err) {
        return res.status(400).json({
            message: err.message ? err.message : err
        })
    }
}

module.exports = {
    registerStudents,
    retriveStudents,
    suspendStudent
};