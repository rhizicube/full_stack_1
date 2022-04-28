const Sequelize = require('sequelize');

const sequelize = new Sequelize('full_stack', 'root', 'rhizi1234', 
{
    dialect:'mysql', 
    host: '0.0.0.0',
   
   // operatorsAliases: false,
   
});

module.exports = sequelize;
