const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, title, office) {
        super(name, id, email, title)
        this.office = office;
        this.title = title;
        }
    getOffice() {
          return this.office;
        }
        getTitle() {
          return this.title;
        }
      }
      
      module.exports = Manager;