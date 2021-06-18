const Employee = require('./employee');

class Engineer extends Employee {
  constructor(name, id, email, title, github) {
    super(name, id, email, title)
    this.title= "Engineer";
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getTitle() {
    return this.title;
  }
}

module.exports = Engineer;