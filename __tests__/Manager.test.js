const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('gets office number', () => {
    const officeValue = 30;
    const employee = new Manager('Tom', 50, "email@email.com", officeValue);
    expect(employee.officeNumber).toBe(officeValue);
});

test("getRole() should now return 'Manager'", () => {
    const testRole = "Manager";
    const employee = new Manager('Tom', 50, "email@email.com", testRole);
    expect(employee.getRole()).toBe(testRole);
});

test('get office number using getOfficeNumber()', () => {
    const testOffice = 30;
    const employee = new Manager('Tom', 50, "email@email.com", testOffice);
    expect(employee.getOfficeNumber()).toBe(testOffice);
});