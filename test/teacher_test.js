/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  2.0.0                                                        *
 * Date         :  08 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
 let request = require('supertest')
 require('dotenv').config()
 let url = `http://localhost:${process.env.PORT}`
 describe('Space test suite', () => {
     test('Test check for end point is correctly working or not', async() => {
         const response = await request(url).get("/");
         expect(response.statusCode).toBe(200);
     });
 });
 describe('Teacher Student Registration', () => {
     test('Test Registration Case 1', async() => {
         const response = await request(url).post("/api/register").send({
             "teacher": "teachertest1@gmail.com",
             "students": ["studenttest1@gmail.com", "studenttest2@gmail.com", "studenttest3@gmail.com"]
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(204)
     });
     test('Test Registration Case 2', async() => {
         const response = await request(url).post("/api/register").send({
             "teacher": "teachertest2@gmail.com",
             "students": ["studenttest1@gmail.com", "studenttest2@gmail.com", "studenttest3@gmail.com"]
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(204)
     });
     test('Test Registration Case 3', async() => {
         const response = await request(url).post("/api/register").send({
             "teacher": "teachertest3@gmail.com",
             "students": ["studenttest4@gmail.com", "studenttest5@gmail.com", "studenttest6@gmail.com"]
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(204)
     });
     test('Test Registration Case 4', async() => {
         const response = await request(url).post("/api/register").send({
             "students": ["studenttest4@gmail.com", "studenttest5@gmail.com", "studenttest6@gmail.com"]
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
     test('Test Registration Case 5', async() => {
         const response = await request(url).post("/api/register").send({}).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
     test('Test Registration Case 6', async() => {
         const response = await request(url).post("/api/register").send({
             "teacher": "teachertest6@gmail.com",
             "students": ["studenttest3@gmail.com", "studenttest5@gmail.com", "studenttest7@gmail.com"]
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(204)
     });
 });
 describe('Suspend Student', () => {
     test('Test Suspend Student Case 1', async() => {
         const response = await request(url).post("/api/suspend").send({
             "student": "studenttest4@gmail.com"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(204)
     });
     test('Test Suspend Student Case 2', async() => {
         const response = await request(url).post("/api/suspend").send({
             "teacher": "studenttest4@gmail.com"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
     test('Test Suspend Student Case 3', async() => {
         const response = await request(url).post("/api/suspend").send({}).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
     test('Test Suspend Student Case 4', async() => {
         const response = await request(url).post("/api/suspend").send({
             "student": "abcd@gmail.com"
         }).set('Accept', 'application/json')
         expect(response.statusCode).toBe(400)
     });
 });
 describe('Retrieve the list of students for a given teacher', () => {
     test('Test Retrieve Student Case 1', async() => {
         const response = await request(url).get("/api/commonstudents?teacher=teachertest1@gmail.com&teacher=teachertest8@gmail.com")
         expect(response.statusCode).toBe(400)
     });
     test('Test Retrieve Student Case 2', async() => {
         const response = await request(url).get("/api/commonstudents?teacher=teachertest1@gmail.com")
         expect(response.statusCode).toBe(200)
     });
     test('Test Retrieve Student Case 3', async() => {
         const response = await request(url).get("/api/commonstudents?teacher=teachertest10@gmail.com")
         expect(response.statusCode).toBe(400)
     });
     test('Test Retrieve Student Case 4', async() => {
         const response = await request(url).get("/api/commonstudents?teacher=teachertest1@gmail.com&teacher=teachertest3@gmail.com")
         expect(response.statusCode).toBe(200)
     });
 });