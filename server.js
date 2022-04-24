const db = require('./db/connection.js')
const inquirer = require('inquirer')
let runPrompt;
function allDepts() {
    runPrompt = require('./db/index')
    db.query('SELECT * FROM emp_department', function (err, results) {
        console.table(results);
        runPrompt();
    });
}

function allRoles() {
    runPrompt = require('./db/index')
    db.query('SELECT * FROM emp_role', function (err, results) {
        console.table(results);
        runPrompt();
    });
}

function allEmps(){
    runPrompt = require('./db/index')
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
        runPrompt();
    });
}

function addDept () {
    runPrompt = require('./db/index')
    inquirer.prompt ([
        {
            type: 'input',
            name: 'addDept',
            message: "What is the name of the department you would like to add?"

        }
    ]).then(response =>{
        db.query('INSERT INTO emp_department SET ?', {
            name: response.addDept
        })
        runPrompt();
    })
   
}

function addRole () {
    runPrompt = require('./db/index')
    db.query('SELECT * FROM emp_department', (err, res)=>{
        inquirer.prompt([
            {
                type: 'list',
                name: 'deptId',
                message: 'What department is your employee in?',
                choices: res.map(department=>department.name)
            },
            {
                type: 'input',
                name: 'addSalary',
                message: "What is your employees salary?",
            },
            {
                type: 'input',
                name: "addTitle",
                message: "What is your employees job title?"
            }
        ]).then(response=>{
            const selectedDept = res.find(department=>department.name === response.deptId)
            db.query('INSERT INTO emp_role SET ?', {
                salary: response.addSalary,
                title: response.addTitle,
                department_id: selectedDept.id
            })
            console.log('New role added!')
            runPrompt();
        })
    })
}

function addEmp () {
    runPrompt = require('./db/index')
    db.query('SELECT * FROM employee INNER JOIN emp_role ON employee.role_id = emp_role.id', (err, res)=>{
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
                choices: res.map(role=>role.first_name).slice(0,2)
            },

        ]).then(response=>{
            const selectedTitle = res.find(role=>role.title === response.empId)
            const selectedManager = res.find(role=>role.first_name === response.empManager)
            db.query('INSERT INTO employee SET ?', {
                first_name: response.firstName,
                last_name: response.lastName,
                role_id: selectedTitle.id,
                manager_id: selectedManager.manager_id
            })
            console.log('New employee added!')
            runPrompt();
        })
    })
}

function updateEmp () {
    db.query('SELECT * FROM employee', (err, res)=>{
        inquirer.prompt([
            {
                type: 'list',
                name: 'empName',
                message: 'Which employee would you like to update',
                choices: res.map(emp=>emp.first_name)
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
                choices: res.map(role=>role.first_name).slice(0,2)
            },
        ]).then(response=>{
            const selectedEmployee = res.find(emp=>emp.first_name === response.empName)
            const selectedManager = res.find(role=>role.first_name === response.empManager)
            db.query('UPDATE employee SET ? WHERE id = ?', {
                first_name: response.firstName,
                last_name: response.lastName,
                role_id: selectedEmployee.id,
                manager_id: selectedManager.manager_id,
            })
            console.log('Employee has been updated!')
            runPrompt();
        })
    })
}


module.exports = {
    allDepts, allRoles, allEmps, addDept, addRole, addEmp, updateEmp
}




