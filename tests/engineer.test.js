const Engineer = require('../library/engineer.js');

const name = "Andrew";
const id = 1;
const email = "andrew@email.com";
const gitHub = "AnDrEw";

const testEngineer = new Engineer(name, id, email, gitHub);

test('Name matches', () => {
    expect(testEngineer.name).toEqual(expect.any(String))
    expect(testEngineer.name.length).toBeGreaterThan(2)
  });
  
  test('ID id a number', () => {
    expect(testEngineer.id).toEqual(expect.any(Number))
  });
  
  test('Valid Email', () => {
    expect(testEngineer.email).toEqual(expect.stringContaining('@'))
  });
  
  test('Is Engineer?', () => {
    expect(testEngineer.title).toBe('Engineer')
  });
  
  test('GitHub Provided', () => {
    expect(testEngineer.gitHub).toEqual(expect.any(String))
  });