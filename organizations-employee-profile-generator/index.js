const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employeeData = [];

const role = (dataRole) => {
  if (dataRole.confirmManager == true) {
    return 'Manager'
  }
  else if (dataRole.confirmEngineer == true) {
    return 'Engineer'
  }
  else if (dataRole.confirmIntern == true) {
    return 'Intern'
  } else {
    return 'Employee'
  }
};

const name1 = (dataName) => {
  const name2 = dataName.name
  return name2
};

const id1 = (dataId) => {
  const id2 = dataId.id
  return id2
};

const email1 = (dataEmail) => {
  const email2 = dataEmail.email
  return email2
};

const roleData1 = (dataRoleData) => {
  const roleData2 = dataRoleData.roleInfo
  return roleData2
};

const employees = (outputData) => {
  

      // map(({ name, role, id, email, roleData}) => {
      return `
      <div class="container">
          <div class="row">
          <div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
          <h5 class="h5 card-header">${name1(outputData)}<br /><br />${role(outputData)}</h5>
          <ul class="list-group list-group-flush">
              <li class="list-group-item infoTabs">ID: ${id1(outputData)}</li>
              <li class="list-group-item infoTabs">Email Address: ${email1(outputData)}</li>
              <li class="list-group-item infoTabs">${roleData1(outputData)}</li>
          </ul>
          </div>
      </div>
       </div>
  </div>`
      // })
    };




const writeFile = (inputData) => {

  fs.writeFile('./dist/employee-profile.html', `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css" />
  <title>Organization's Employee Profile</title>
</head>
<body>
  <nav class="nav navbar mb-5">
      <span class="nav navbar-brand mb-0 h1 w-100 text-center">Organization's Employee Profile</span>
  </nav>
      ${employees(inputData)}
</body>
</html>`
    ,
    err => {
      if (err) {
        console.log(err)
      }
    });;
}
const writeCSS = (inputData) => {

  fs.writeFile('./dist/style.css', `body {
    background-color: #EDEAD0;
  }
  .nav {
    background-color: #86BAA1;
  }
  .infoTabs {
    background-color: #FFCF56;
  }
  .h5 {
    background-color: #3AB795;
  }`
    ,
    err => {
      if (err) {
        console.log(err)
      }
    });;
}


const inputData = employeeList => {
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the Employee's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('A name is required.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Employees ID?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('An ID is required.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Employees email?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('A name is required.');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmEmployee',
      message: 'Is this employee a standard Employee?',
      default: true
    },
    {
      type: 'confirm',
      name: 'confirmManager',
      message: 'Is this employee a Manager?',
      default: false,
      when: ({ confirmEmployee })  => {
        if (confirmEmployee) {
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "roleInfo",
      message: "Enter Manager's office number.",
      when: ({ confirmManager })  => {
        if (confirmManager) {
          return true;
        } else {
          return false;
        }
      }
    },

    {
      type: 'confirm',
      name: 'confirmEngineer',
      message: 'Is this employee an Engineer?',
      default: false,
      when: ({ confirmManager })  => {
        if (confirmManager) {
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "roleInfo",
      message: "Enter Engineer's github username",
      when: ({ confirmEngineer })  => {
        if (confirmEngineer) {
          return true;
        } else {
          return false;
        }
      }
    },

    {
      type: 'confirm',
      name: 'confirmIntern',
      message: 'Is this employee an Intern?',
      default: false,
      when: ({ confirmEngineer })  => {
        if (confirmEngineer) {
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "roleInfo",
      message: "Enter the Interns School",
      when: ({ confirmIntern })  => {
        if (confirmIntern) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to enter another employee?',
      default: false
    }
  ])
    .then(employeeList => {
       const employeeInfo = employeeList
       console.log("data 1", employeeData);
       console.log("info" ,employeeInfo);
       employeeData.push(employeeInfo);
       console.log("data 2", employeeData);
      
      if (employeeList.confirmAddEmployee) {
        return inputData();
      } else {
        console.log("length", employeeData);
        console.log("list", employeeList);
        return employeeData
        // writeFile(employeeList)
      }
    
    });;
};
 
inputData().then(employeeData => {
  return writeFile(employeeData)})
  .then(info => {return writeCSS(info)});

