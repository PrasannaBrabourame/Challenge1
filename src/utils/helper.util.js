/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  1.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  04 Oct 2022                                                  *
 ********************************************************************************/

/**
 * function used to split the students email address from the notification string
 * @async
 * @function splitStudentEmail
 * @type {POST Method}
 * @param {String} text - raw string with notification and students email address with @ symbol
 * @returns {Array} List of students email addresses
 */
 const splitStudentEmail = (text) => {
    try {
        if (!text || typeof text === "number") {
            throw new Error('Improper Input Details')
        }
        const expressions = /@(.*?com)/gm
        let matches
        let studentsDetails = []
        while (matches = expressions.exec(text)) {
            studentsDetails.push(matches[1]);
        }
        if (studentsDetails.length < 1) {
            throw new Error('No students email address found')
        }
        return {
            status: true,
            result: studentsDetails
        }
    } catch (e) {
        return {
            status: false,
            error: e.message
        }
    }
}


module.exports = {
    splitStudentEmail
}