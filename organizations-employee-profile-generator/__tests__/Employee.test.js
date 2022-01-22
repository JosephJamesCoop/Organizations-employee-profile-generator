
const Employee = require("../lib/Employee");

describe("All parts of Employee Object", () => {

    it("Verifies name is attached", () => {
        const nameValue = 'Dave';
        const worker = new Employee(nameValue);
        expect(worker.name).toBe(nameValue);
    });

    it("Verifies ID is attached", () => {
        const idValue = 1001;
        const worker = new Employee('Dave', idValue);
        expect(worker.id).toBe(idValue);
    });

    it("Verifies email is attached", () => {
        const emailValue = "example@email.com";
        const worker = new Employee('Dave', 1001, emailValue);
        expect(worker.email).toBe(emailValue);
    });
    
    it("Verifies Job Title is attached", () => {
      const titleValue = "Employee";
      const worker = new Employee('Dave', 1001, 'example@email.com', titleValue);
      expect(worker.role).toBe(titleValue);
  });
});
