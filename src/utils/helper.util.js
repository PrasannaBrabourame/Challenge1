/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  2.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
/**
 * function used to split the students email address from the notification string
 * @async
 * @function splitStudentEmail
 * @param {String} text - raw string with notification and students email address with @ symbol
 * @returns {Array} List of students email addresses
 */
 const splitStudentEmail = (text) => {
    try {
        if(!text || typeof text === "number") {
            throw new Error('Improper Input Details')
        }
        const expressions = /(\w+@\w+.\w+([^\s]+))/gm
        let matches
        let studentsDetails = []
        while(matches = expressions.exec(text)) {
            studentsDetails.push(matches[1]);
        }
        return {
            success: true,
            data: studentsDetails
        }
    } catch(e) {
        return {
            success: false,
            error: e.message
        }
    }
}
/**
 * function used to convert Array to Object with Specified Key Values
 * @async
 * @function arrayToObject
 * @param {Array} arr - Array of Object to convert
 * @param {String} key - String Values Key for Object
 * @returns {Object} {key:val}
 */
const arrayToObject = (arr, key) => {
    return arr.map(function(val) {
        return {
            [key]: val
        }
    }, {});
}
/**
 * function used to convert Object Array to required format
 * @async
 * @function objectArrayFormator
 * @param {Array} arr - Array of Object to convert
 * @param {String} key - String Values Key for Object
 * @returns {Object} {key:val}
 */
const objectArrayFormator = (arr, key) => {
    return arr.map(function(val) {
        return val[key]
}, {});
}
module.exports = {
    splitStudentEmail,
    arrayToObject,
    objectArrayFormator
}