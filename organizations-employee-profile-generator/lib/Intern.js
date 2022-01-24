// call employee page

// school

// getschool() call

// getRole() overrriden to replace with 'intern'

const Employee = require("./Employee");

class Intern extends Employee {
  constructor (name, id, email, school) {
      super(name, id, email);
      this.school = school;
      this.role = 'Intern';
  }
  // getname() call
  getSchool() {
      return this.school;
  }
// getId() call
  getRole() {
      return this.role;
  }
}

module.exports = Intern;