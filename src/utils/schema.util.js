/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  2.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
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
         teacher: Joi.string().email().required(),
         notification: Joi.string().required()
     }),
     retriveStudents: Joi.object({
         teacher: Joi.alternatives().try(Joi.array().required(), Joi.string().email().required())
     })
 }
 module.exports = {
     schemaValidator
 }