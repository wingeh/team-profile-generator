const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, role, offic) {
        super(name, id, email, role)
        this.office = office;
        }
    getOffice() {
          return this.office;
        }
        getTitle() {
          return this.title;
        }
      }
      
      module.exports = Manager;