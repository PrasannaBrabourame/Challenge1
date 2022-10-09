/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  3.0.0                                                        *
 * Date         :  07 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
 const DbConfigOptions = require('../../knexfile')
 const knex = require('knex')(DbConfigOptions['development']);
 const {
     masterStudents,
     masterTeachers,
     transactionMappings
 } = require('../configs/general.config')
 const {
     splitStudentEmail,
     objectArrayFormator
 } = require('../utils/helper.util')
 const {
     statusCodes
 } = require('../configs/status.config');
 const notificationService = {
     /**
      * function used to insert the details into the database
      * @async
      * @function registerStudent
      * @param {Object} params - Object containing Teacher and Student Details
      * @returns {Object} {Success: bool, message : string}
      */
     retriveNotification: async(params) => {
         const {
             teacher,
             notification
         } = params;
         try {
             let notificationStudentDetails = splitStudentEmail(notification)
             if(!notificationStudentDetails.success) {
                 throw new Error(notificationStudentDetails.message)
             }
             notificationStudentDetails = [...new Set(notificationStudentDetails.data)]
             let teacherDetails = await knex(masterTeachers).where('email', teacher).select('id')
             if(!teacherDetails.length) {
                 throw new Error(statusCodes[3])
             }
             let notificationStudentIDList = await knex(masterStudents).where((builder) => builder.whereIn('email', notificationStudentDetails).whereNot('suspend', false)).select('email')
             let notificationStudentIDArray = objectArrayFormator(notificationStudentIDList, 'email')
             let studentIDList = await knex(transactionMappings).where('teacher_id', teacherDetails[0].id).select('student_id')
             let studentListArray = objectArrayFormator(studentIDList, 'student_id')
             let finalStudentDetails = notificationStudentDetails.filter(function(item){
                return !notificationStudentIDArray.includes(item)
             })
             let studentDetails = await knex(masterStudents).where((builder) => builder.whereIn('id', studentListArray).whereNot('suspend', true)).select('email')
             let recipients = [...new Set([...finalStudentDetails, ...objectArrayFormator(studentDetails, 'email')])]
             return {
                 success: true,
                 message: statusCodes[1],
                 data: {
                     recipients
                 }
             }
         } catch(err) {
             return {
                 success: false,
                 message: err.message
             }
         }
     }
 }
 module.exports = {
     notificationService
 };