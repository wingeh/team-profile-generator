const Intern = require('../library/intern.js');

const name = "Andrew";
const id = 1;
const email = "andrew@email.com";
const title = "Intern";
const school = "Cool Skool";

const testIntern = new Intern(name, id, email, title, school);

test('Name matches', () => {
    expect(testIntern.name).toEqual(expect.any(String))
    expect(testIntern.name.length).toBeGreaterThan(2)
  });
  
  test('ID id a number', () => {
    expect(testIntern.id).toEqual(expect.any(Number))
  });
  
  test('Valid Email', () => {
    expect(testIntern.email).toEqual(expect.stringContaining('@'))
  });
  
  test('Is Intern?', () => {
    expect(testIntern.title).toBe('Intern')
  });
  
  test('Schoool provided', () => {
    expect(testIntern.school).toEqual(expect.any(String))
  });