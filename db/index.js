const inquirer = require ('inquirer');
const db = require('./connection')

require('dotenv').config();
const { allDepts, allRoles, allEmps, addDept, addRole, addEmp } = require('../server')
db.connect(function(err){
    if (err) throw err
    runPrompt()
})

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
                case options[0]:
                    allDepts();
                    break;
                case options[1]:
                    allRoles();
                    break;
                case options[2]:
                    allEmps();
                    break;   
                case options[3]:
                    addDept();
                    break;
                case options[4]:
                    addRole();
                    break;
                case options[5]:
                    addEmp();
                    break;
                // case opt[5]:
                //     break;
                // case opt[6]:
                //     break;
                    

            }
        }) 
}




module.exports = runPrompt
// runPrompt();