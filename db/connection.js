const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
 {
host: 'localhost',
// MySQL username,
user: 'root',
password: 'rootroot1999',
database: 'employee_db'
},
console.log(`Connected to the classlist_db database.`)
);
// db.query('SELECT id,first_name FROM students', function (err, results) {
// // console.log(results);
// res.json(results)
// });

module.exports = db