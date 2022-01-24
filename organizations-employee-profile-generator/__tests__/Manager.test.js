
const Manager = require("../lib/Manager");

describe("All parts of Manager Object", () => {

    it("Verifies office number is attached", () => {
        const officeNumberValue = '503-555-5555';
        const worker = new Manager('Dave', 1001, 'example@email.com', officeNumberValue);
        expect(worker.officeNumber).toBe(officeNumberValue);
    });

    it("Verifies Job Title is attached", () => {
      const titleValue = "Manager";
      const worker = new Manager('Dave', 1001, 'example@email.com', '503-555-5555', titleValue);
      expect(worker.role).toBe(titleValue);
  });
});
