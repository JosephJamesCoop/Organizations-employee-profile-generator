const Employee = require("./Employee");

class Manager extends Employee {
  constructor (name, id, email, github) {
      super(name, id, email);
      this.officeName = officeName;
      this.role = 'Manager';
  }
  // getname() call
  getofficeName() {
      return this.officeName;
  }
// getId() call
  getRole() {
      return this.role;
  }
}

module.exports = Manager;