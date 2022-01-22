
const Engineer = require("../lib/Engineer");

describe("All parts of Engineer Object", () => {

    it("Verifies office number is attached", () => {
        const officeNumber = '503-555-5555';
        const worker = new Engineer('Dave', 1001, 'example@email.com', officeNumber);
        expect(worker.github).toBe(officeNumber);
    });

    it("Verifies Job Title is attached", () => {
      const titleValue = "Engineer";
      const worker = new Engineer('Dave', 1001, 'example@email.com', '503-555-5555', titleValue);
      expect(worker.role).toBe(titleValue);
  });
});
