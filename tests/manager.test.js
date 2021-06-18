const Manager = require('../library/manager.js');

const name = "Andrew";
const id = 1;
const email = "andrew@email.com";
const office = 54;

const testManager = new Manager(name, id, email, office);

test('Name matches', () => {
    expect(testManager.name).toEqual(expect.any(String))
    expect(testManager.name.length).toBeGreaterThan(2)
  });
  
  test('ID id a number', () => {
    expect(testManager.id).toEqual(expect.any(Number))
  });
  
  test('Valid Email', () => {
    expect(testManager.email).toEqual(expect.stringContaining('@'))
  });
  
  test('Is Manager?', () => {
    expect(testManager.title).toBe('Manager')
  });
  
  test('Office Number included', () => {
    expect(testManager.office).toEqual(expect.any(Number))
  });