const Employee = require("./Employee");

class Engineer extends Employee {
  constructor (name, id, email, github) {
      super(name, id, email);
      this.github = github;
      this.role = 'Engineer';
  }
  // getname() call
  getGithub() {
      return this.github;
  }
// getId() call
  getRole() {
      return this.role;
  }
}

module.exports = Engineer;