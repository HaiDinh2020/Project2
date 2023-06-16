var mysql      = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'mockexam',
    user: 'root',
    password: 'm@tKhaumysql'
});

module.exports = connection;