/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  1.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  08 Oct 2022                                                  *
 ********************************************************************************/
 const DbConfigOptions = require('../../knexfile')
 const knex = require('knex')(DbConfigOptions['development']);
 const {
     masterStudents, masterTeachers, transactionMappings
 } = require('../configs/general.config')
 const {
     objectArrayFormator
 } = require('../utils/helper.util')
 const teacherService = {
     /**
      * function used to insert the details into the database
      * @async
      * @function registerStudent
      * @param {Object} params - Object containing Teacher and Student Details
      * @returns {Object} {Success: bool, message : string}
      */
     registerStudent: async(params) => {
         const {
             teacher, students
         } = params;
         try {
             let teacherId = (await knex(masterTeachers).insert({
                 email: teacher
             }).onConflict(['email']).merge())[0]
             if(!teacherId) {
                 teacherId = (await knex(masterTeachers).where({
                     email: teacher
                 }))[0]['id']
             }
             let mappingDetails = []
             for(const student of students) {
                 let studentId = (await knex(masterStudents).insert({
                     email: student
                 }).onConflict(['email']).merge())[0]
                 if(!studentId) {
                     studentId = (await knex(masterStudents).where('email', student))[0]['id']
                 }
                 mappingDetails.push({
                     teacher_id: teacherId,
                     student_id: studentId
                 });
             }
             for(const mapping of mappingDetails) {
                 let mappingId = (await knex(transactionMappings).where({
                     'teacher_id': mapping.teacher_id,
                     'student_id': mapping.student_id
                 }))[0]
                 if(!mappingId) {
                     mappingId = await knex(transactionMappings).insert({
                         'teacher_id': mapping.teacher_id,
                         'student_id': mapping.student_id
                     })
                 }
             }
             return {
                 success: true,
                 message: "Data Pushed Successfully"
             }
         } catch(err) {
             return {
                 success: false,
                 message: err.message
             }
         }
     },
     /**
      * function used to suspend the particualar student from active status
      * @async
      * @function registerStudent
      * @param {Object} params - Object containing Teacher and Student Details
      * @returns {Object} {Success: bool, message : string}
      */
     suspendStudent: async(params) => {
         const {
             student
         } = params;
         try {
             await knex(masterStudents).where({
                 email: student
             }).update({
                 suspend: true
             })
             return {
                 success: true,
                 message: "Data Updated Successfully"
             }
         } catch(err) {
             return {
                 success: false,
                 message: err.message
             }
         }
     },
     /**
      * function used to suspend the particualar student from active status
      * @async
      * @function registerStudent
      * @param {Object} params - Object containing Teacher and Student Details
      * @returns {Object} {Success: bool, message : string}
      */
     retriveStudents: async(params) => {
         const {
             teacher
         } = params;
         try {
             let teacherDetails = await knex(masterTeachers).where((builder) => builder.whereIn('email', teacher)).select('id')
             let mappedStudentDetails = await knex(transactionMappings).whereIn('teacher_id', objectArrayFormator(teacherDetails, 'id')).groupBy('student_id').havingRaw('count(distinct teacher_id) = ' + teacherDetails.length).select('student_id')
             let studentDetails = await knex(masterStudents).whereIn('id', objectArrayFormator(mappedStudentDetails, 'student_id')).select('email')
             return {
                 success: true,
                 data: {
                     'recipients': objectArrayFormator(studentDetails, 'email')
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
     teacherService
 };