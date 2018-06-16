const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'init'
});
module.exports = connection;


// Dorénavant, le connecteur de la base de données sera accessible dans n'importe quel fichier via :
// const connection = require('./helpers/db.js');