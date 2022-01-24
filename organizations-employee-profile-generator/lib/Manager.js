const Employee = require("./Employee");


class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
      this.role = 'Manager';
  }
  // getname() call
  getOfficeName() {
      return this.officeNumber;
  }
// getId() call
  getRole() {
      return this.role;
  }
}

module.exports = Manager;