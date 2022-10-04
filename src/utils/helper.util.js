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
     const expressions = {
         main: /@(.*?com)/gm,
     }
     try {
         let result = expressions.main.exec(text)
         if (result) {
             result = result.map(s => s.trim())
         }
         return {
         }
     } catch (e) {
         return {
         }
     }
 }
 

module.exports = {
    splitStudentEmail
}