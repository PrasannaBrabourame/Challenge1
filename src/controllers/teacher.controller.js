/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  1.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  04 Oct 2022                                                  *
 ********************************************************************************/

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
        return res.sendStatus(204)
    } catch (err) {
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
        return res.status(200).json({
            "Sucess": true
        })
    } catch (err) {
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
        return res.sendStatus(204)
    } catch (err) {
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