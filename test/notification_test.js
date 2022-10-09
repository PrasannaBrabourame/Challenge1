/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  2.0.0                                                        *
 * Date         :  09 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
 let request = require('supertest')
 require('dotenv').config()
 let url = `http://localhost:${process.env.PORT}`
 describe('Retrive Notification for Teachers', () => {
     test('Test Retrive Notification Case 1', async() => {
         const response = await request(url).post("/api/retrievefornotifications").send({
             "teacher": "teachertest1@gmail.com",
             "notification": "Hello students! @studenttest1@gmail.com @studentmiche@gmail.com"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(200)
     });
     test('Test Retrive Notification Case 2', async() => {
         const response = await request(url).post("/api/retrievefornotifications").send({
             "teacher": "teachertest11@gmail.com",
             "notification": "Hello students! @studenttest1@gmail.com @studentmiche@gmail.com"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
     test('Test Retrive Notification Case 3', async() => {
         const response = await request(url).post("/api/retrievefornotifications").send({
             "teacher": "teachertest1@gmail.com",
             "notification": "Hello students!"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(200)
     });
     test('Test Retrive Notification Case 4', async() => {
         const response = await request(url).post("/api/retrievefornotifications").send({
             "notification": "Hello students!"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
     test('Test Retrive Notification Case 5', async() => {
         const response = await request(url).post("/api/retrievefornotifications").send({
             "teacher": "teachertest1@gmail.com"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
     test('Test Retrive Notification Case 6', async() => {
         const response = await request(url).post("/api/retrievefornotifications").send({
             "notification": "Hello students!",
             "teacher": "123"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
 });