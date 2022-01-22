//  Name input function

class Employee {
  constructor (name, id, email, role) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = 'Employee';
  }
  // getname() call
  getName() {
      return this.name;
  }
// getId() call
  getId() {
      return this.id;
  }
  // getEmail() call
  getEmail() {
      return this.email;
  }
//getRole() returns employee
  getRole() {
      return this.role;
  }
}

module.exports = Employee;