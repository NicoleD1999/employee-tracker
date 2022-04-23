const inquirer = require ('inquirer');
require('dotenv').config();
const { allDepts, allRoles } = require('./server')
const options = ["View All Departments", "View All Roles", "View All Employees", "Add New Department", "Add New Role", "Add New Employee", "Update Employee Role"]
function runPrompt () {
    inquirer.prompt([
        {type:"list",
         name: "options",
         message: "What would you like to do?",
         choices: options
        },
    ])
        .then ((answer) => {
            console.log(answer);
            switch (answer.options) {
                case opt[0]:
                    allDepts();
                    break;
                case opt[1]:
                    allRoles();
                    break;
                case opt[2]:
                    break;
                case opt[3]:
                    break;
                case opt[4]:
                    break;
                case opt[5]:
                    break;
                case opt[6]:
                    break;
                    

            }
        }) 
}





runPrompt();