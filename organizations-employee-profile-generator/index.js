const inquirer = require('inquirer');

const inputData = (employeeData) => {
  console.log(employeeData);
  if (!employeeData) {
    employeeData = [];
  }
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Name',
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
      name: 'ID',
      message: 'What is the Employees ID?',
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
      name: 'Email',
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
    // {
    //   type: 'confirm',
    //   name: 'Employee',
    //   message: 'Is the Employee a standard Employee?',
    //   default: true
    // },
    //     {
    //   type: 'confirm',
    //   name: 'Manager',
    //   message: 'Is the Employee a Manager?',
    //   when: confirmEmployee => {
    //     if (confirmEmployee === false) {
    //       return true;
    //     } else {
    //       console.log('A name is required.');
    //       return true;
    //     }
    //   }
    // },



    {
      type: 'list',
      name: 'Role',
      message: 'Provide a job title for the employee:',
      choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
    },
    
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to enter another employee?',
      default: false
    }
  ])
    .then(employeeList => {
      employeeData.push(employeeList);
      if (employeeList.confirmAddEmployee) {
        return inputData(employeeData);
      } else {
        return employeeData;
      }
    });;
};



    // {
    //   type: 'confirm',
    //   name: 'Employee',
    //   message: 'Is the Employee a standard Employee?',
    //   default: true
    // },
    // {
    //   validate: ({ confirmEmployee }) => {
    //     if (confirmEmployee === false) {
    //       return { type: 'confirm',
    //   name: 'Manager',
    //   message: 'Is the Employee a Manager?'}
    //     } else {
    //       return false
    //     }
    //   }
    // },
    // {
    //   type: 'input',
    //   name: 'officeNumber',
    //   message: "What is the Manager's office number?",
    //   when: ({ confirmManager }) => {
    //     if (confirmManager) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // },
    // {
    //   type: 'confirm',
    //   name: 'Engineer',
    //   message: 'Is the Employee an Engineer?',
    //   validate: ({ confirmManager }) => {
    //     if (confirmManager === false) {
    //       return true;
    //     } else {
    //       return false
    //     }
    //   }
    // },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: "What is the Engineer's GitHub username?",
    //   when: ({ confirmEngineer }) => {
    //     if (confirmEngineer) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // },
    // {
    //   type: 'confirm',
    //   name: 'Engineer',
    //   message: 'Is the Employee an Engineer?',
    //   validate: ({ confirmEngineer }) => {
    //     if (confirmEngineer === false) {
    //       return true;
    //     } else {
    //       return false
    //     }
    //   }
    // },
    // {
    //   type: 'input',
    //   name: 'officeNumber',
    //   message: "What is the school the intern is attending?",
    //   when: ({ confirmEngineer }) => {
    //     if (confirmEngineer) {
    //       return {
    //         validate: nameInput => {
    //           if (nameInput) {
    //             return true;
    //           } else {
    //             console.log('A school name is required.');
    //             return false;
    //           }
    //         }
    //       };
    //     } else {
    //       return false;
    //     }
    //   }
    // },

  

inputData([]).then(data => { console.log(data.JobTile) });