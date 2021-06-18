const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, title, school) {
    super(name, id, email, title)
    this.title = title;
    this.school = school;
    
  }
  getSchool() {
    return this.school;
  }
  getTitle() {
    return this.title;
  }
}

module.exports = Intern;