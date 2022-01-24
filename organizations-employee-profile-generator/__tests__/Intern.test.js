
const Intern = require("../lib/Intern");

describe("All parts of Intern Object", () => {

    it("Verifies office number is attached", () => {
        const schoolValue = 'Univeristy of Oregon';
        const worker = new Intern('Dave', 1001, 'example@email.com', schoolValue);
        expect(worker.school).toBe(schoolValue);
    });

    it("Verifies Job Title is attached", () => {
      const titleValue = "Intern";
      const worker = new Intern('Dave', 1001, 'example@email.com', 'Univeristy of Oregon', titleValue);
      expect(worker.role).toBe(titleValue);
  });
});
