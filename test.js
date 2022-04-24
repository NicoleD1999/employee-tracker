const db = require('./db/connection.js')
const inquirer = require('inquirer')
db.query('SELECT *  FROM employee INNER JOIN emp_role ON employee.role_id = emp_role.id', (err, res)=>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'empId',
            message: 'What role is the role of your new employee?',
            choices: res.map(role=>role.title)
        },
        {
            type: 'input',
            name: 'firstName',
            message: "What is your employees first name?",
        },
        {
            type: 'input',
            name: "lastName",
            message: "What is your employees last name?"
        },
        {
            type: 'list',
            name: "empManager",
            message: "Who is your employees manager?",
            choices: res.map(role=>role.first_name)
        },

    ])
})