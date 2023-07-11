var mysql      = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'data_exam',
    user: 'root',
    password: 'm@tKhaumysql'
});

module.exports = connection;