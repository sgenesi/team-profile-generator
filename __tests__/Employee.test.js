const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
});

test('sets employee name', () => {
    const name = 'Joe';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('sets employee id', () => {
    const idValue = 50;
    const employee = new Employee("Joe", idValue);
    expect(employee.id).toBe(idValue);
});

test('sets employee email address', () => {
    const emailAddress = "email@email.com";
    const employee = new Employee("Joe", 50, emailAddress);
    expect(employee.email).toBe(emailAddress);
});

test('get name using getName()', () => {
    const testName = 'Joe';
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test('get id using getId()', () => {
    const testId = 50;
    const employee = new Employee("Joe", testId);
    expect(employee.getId()).toBe(testId);
});

test('get email using getEmail()', () => {
    const testEmail = "email@email.com";
    const employee = new Employee("Joe", 50, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test("get role using getRole() and should return 'Employee'", () => {
    const testRole = "Employee";
    const employee = new Employee('Joe', 50, "email@email.com");
    expect(employee.getRole()).toBe(testRole);
});