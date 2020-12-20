require('dotenv').config();

let mysql = require("mysql2");

/*const connection = mysql.createConnection({
    //host: '127.0.0.1',
    //port: '3325',
    //user: 'ben',
    //password: 'password',
    //database: 'complexity'

    host: process.env.HOSTNAME,
});*/

/*connection.query(
    'INSERT INTO test (a, b, c) VALUES (3, 4, 5)',
    function(error, results, fields) {
        console.log(results);
        console.log(fields);
    }
);*/

console.log("ENV", process.env.HOSTNAME)
