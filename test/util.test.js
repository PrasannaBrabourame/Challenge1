 /*********************************************************************************
  *                                                                              *
  * Author       :  Prasanna Brabourame                                          *
  * Version      :  1.0.0                                                        *
  * Date         :  04 Sep 2022                                                  *
  * Author       :  https://github.com/PrasannaBrabourame                        *
  * Last updated :  04 Oct 2022                                                  *
  ********************************************************************************/

const {
    splitStudentEmail
} = require('../src/utils/helper.util')

describe('Helper Util : Student Email Split true response', () => {

    test('String Process to split names with @', () => {
        expect(splitStudentEmail('Hello students! @studentagnes@gmail.com @studentmiche@gmail.com')).toEqual({
            status: true,
            result: expect.any(Array)
        });
    });

    test('String Process to split names with @ false response', () => {
        expect(splitStudentEmail('Hello students!')).toEqual({
            status: false,
            error: 'No students email address found'
        });
    });

    test('String Process to split names with @ false response', () => {
        expect(splitStudentEmail()).toEqual({
            status: false,
            error: 'Improper Input Details'
        });
    });

    test('String Process to split names with @ false response', () => {
        expect(splitStudentEmail(123)).toEqual({
            status: false,
            error: 'Improper Input Details'
        });
    });

    test('String Process to split names with @', () => {
        expect(splitStudentEmail('Hello students! @studentagnes@gmail.com @studentmiche@gmail.com @testingstudent')).toEqual({
            status: true,
            result: expect.any(Array)
        });
    });
});