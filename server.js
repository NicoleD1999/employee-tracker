const db = require('.db/connection.js')
function allDepts() {
    db.query('SELECT * FROM emp_department', function (err, results) {
        console.log(results);
    });
}

function allRoles() {
    db.query('SELECT * FROM emp_role', function (err, results) {
        console.log(results);
    });
}

function addDept () {
    db.query('INSERT INTO emp_department (id, name) VALUES (?,?);')
}

function addRole () {
    db.query ("INSERT INTO emp_role()")
}

function addEmp () {
    db.query ('INSERT INTO employee()')
}

function updateEmp () {
    db.query ("SELECT= ? FROM employee")
}
module.exports = {
    allDepts, allRoles
}




