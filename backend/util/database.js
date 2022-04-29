// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('full_stack', 'root', 'rhizi1234', 
// {
//     dialect:'mysql', 
//     host: '0.0.0.0',
   
//    // operatorsAliases: false,
   
// });

// module.exports = sequelize;
const mysql = require('mysql2');

const con = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
    database: 'nodeData',
    password: 'rhizi1234'
})

module.exports = con;