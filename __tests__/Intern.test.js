const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('adds school to Intern object', () => {
    const school = 'Utah';
    const employee = new Intern('Andy', 12, "email@email.com", school);
    expect(employee.school).toBe(school);
});

test("getRole() should now return 'Intern'", () => {
    const testRole = "Intern";
    const employee = new Intern('Andy', 12, "email@email.com", testRole);
    expect(employee.getRole()).toBe(testRole);
});

test('get school using getSchool()', () => {
    const testSchool = 'Utah';
    const employee = new Intern('Andy', 12, "email@email.com", testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});