/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  1.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  07 Oct 2022                                                  *
 ********************************************************************************/
 const Joi = require('joi');


 const schemaValidator = {
     registerStudent: Joi.object({
         teacher: Joi.string().email().required(),
         students: Joi.array().required()
     }),
     suspendStudent: Joi.object({
         student: Joi.string().email().required(),
     }),
     retriveNotification: Joi.object({
        teacher: Joi.string().required(),
        notification :Joi.string().required()
    }),
    retriveStudents: Joi.object({
        teacher: Joi.array().required()
    })

 }
 
 module.exports = {
     schemaValidator
 }