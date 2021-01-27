const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('adds GitHub username to Engineer object', () => {
    const gitUserName = 'git';
    const employee = new Engineer('Bob', 60, "email@email.com", gitUserName);
    expect(employee.github).toBe(gitUserName);
});

test("getRole() should now return 'Engineer'", () => {
    const testRole = "Engineer";
    const employee = new Engineer('Bob', 60, "email@email.com", testRole);
    expect(employee.getRole()).toBe(testRole);
});

test('get GitHub username using getGithub()', () => {
    const testUserName = 'git';
    const employee = new Engineer('Bob', 60, "email@email.com", testUserName);
    expect(employee.getGithub()).toBe(testUserName);
});