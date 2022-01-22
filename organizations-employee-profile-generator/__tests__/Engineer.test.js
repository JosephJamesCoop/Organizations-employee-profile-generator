
const Engineer = require("../lib/Engineer");

describe("All parts of Engineer Object", () => {

    it("Verifies GitHub username is attached", () => {
        const githubValue = 'Dave@github';
        const worker = new Engineer('Dave', 1001, 'example@email.com', githubValue);
        expect(worker.github).toBe(githubValue);
    });

    
    it("Verifies Job Title is attached", () => {
      const titleValue = "Engineer";
      const worker = new Engineer('Dave', 1001, 'example@email.com', 'Dave@github', titleValue);
      expect(worker.role).toBe(titleValue);
  });
});
