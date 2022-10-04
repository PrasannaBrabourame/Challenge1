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
 async function registerStudents(req, res, next) {
    try {
        res.json({});
    } catch (err) {
        console.error(`Error while registering students`, err.message);
        next(err);
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

async function retriveStudents(req, res, next) {
    try {
        res.json({});
    } catch (err) {
        console.error(`Error while retriving students`, err.message);
        next(err);
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

async function suspendStudent(req, res, next) {
    try {
        res.json({});
    } catch (err) {
        console.error(`Error while suspending students`, err.message);
        next(err);
    }
}

module.exports = {
    registerStudents,
    retriveStudents,
    suspendStudent
};