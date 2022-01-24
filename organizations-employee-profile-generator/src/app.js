const fs = require("fs");
const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");



console.log(member)

function writeHtml() {
const name = member.getName();
const role = member.getRole();
const id = member.getId();
const email = member.getEmail();
const roleData = "";
if (role === "Engineer") {
    const roleData = "GitHub: " + member.getGithub();
  } else if (role === "Intern") {
    const roleData = "School: " + member.getSchool();
} else if (role === "Manager") {
    const roleData = "Office Number: " + member.getOfficeNumber();
  } else if (role === "Intern") {
    const roleData = "School: " + member.getSchool();
}else {
  const roleData = "";
};
  const file = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile</title>
  </head>
  <body>
      <nav class="navbar navbar-dark bg-dark mb-5">
          <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
      </nav>
      <div class="container">
          <div class="row">
          <div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="card-header">${name}<br /><br />Engineer</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email Address: ${email}</li>
              <li class="list-group-item">${roleData}</li>
          </ul>
          </div>
      </div>
       </div>
  </div>
  
</body>
</html>`;
class fileGenerate { fs.writeFile("./dist/employee-profile.html", writeHtml(), function (err) {
      if (err) {
          console.log(err);
      };
  });
  console.log("end");
};


module.exports = fileGenerate