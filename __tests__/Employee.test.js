const { tsThisType } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeOf(employee)).toBe('object');
});

test('sets employee name', () => {
    const name = 'Joe';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('sets employee id', () => {
    const idValue = 50;
    const employee = new Employee(id);
    expect(employee.id).toBe(idValue);
});

test('sets employee email address', () => {
    const emailAddress = "email@email.com";
    const employee = new Employee(emailAddress);
    expect(employee.email).toBe(emailAddress);
});

