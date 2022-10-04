/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  1.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  04 Oct 2022                                                  *
 ********************************************************************************/

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
        return res.status(200).json({
            "Sucess": true
        })
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}


module.exports = {
    retriveNotification
};