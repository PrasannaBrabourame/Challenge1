/*********************************************************************************
 *                                                                              *
 * Author       :  Prasanna Brabourame                                          *
 * Version      :  2.0.0                                                        *
 * Date         :  04 Sep 2022                                                  *
 * Author       :  https://github.com/PrasannaBrabourame                        *
 * Last updated :  09 Oct 2022                                                  *
 ********************************************************************************/
 const {
	splitStudentEmail,
	arrayToObject,
	objectArrayFormator
} = require('../src/utils/helper.util')
describe('Helper Util : Student Email Split true response', () => {
	test('String Process to split names with @', () => {
		expect(splitStudentEmail('Hello students! @studentagnes@gmail.com @studentmiche@gmail.com')).toEqual({
			success: true,
			data: expect.any(Array)
		});
	});
	test('String Process to split names with @ false response', () => {
		expect(splitStudentEmail('Hello students!')).toEqual({
			success: true,
			data: expect.any(Array)
		});
	});
	test('String Process to split names with @ false response', () => {
		expect(splitStudentEmail()).toEqual({
			success: false,
			error: 'Improper Input Details'
		});
	});
	test('String Process to split names with @ false response', () => {
		expect(splitStudentEmail(123)).toEqual({
			success: false,
			error: 'Improper Input Details'
		});
	});
	test('String Process to split names with @', () => {
		expect(splitStudentEmail('Hello students! @studentagnes@gmail.com @studentmiche@gmail.com @testingstudent')).toEqual({
			success: true,
			data: expect.any(Array)
		});
	});
});
describe('Helper Util : Array to Object', () => {
	test('Array to Object - Case 1', () => {
		expect(arrayToObject([1], 'test')).toEqual([{
			"test": 1
		}]);
	});
	test('Array to Object - Case 2', () => {
		expect(arrayToObject(['Hello'], 'Hello')).toEqual([{
			"Hello": 'Hello'
		}]);
	});
});
describe('Helper Util : Object Array Formattor', () => {
	test('Object Array Formattor- Case 1', () => {
		expect(objectArrayFormator([{
			"test": 1
		}], 'test')).toEqual([
			1
		]);
	});
	test('Object Array Formattor - Case 2', () => {
		expect(objectArrayFormator([{
			"test": 1
		}, {
			"test": "test"
		}], 'test')).toEqual([
			1, "test"
		]);
	});
});