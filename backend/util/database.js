const Sequelize = require('sequelize');

const sequelize = new Sequelize('full_stack', 'root', 'rhizi1234', 
{
    dialect:'mysql', 
    host: 'localhost'
});

module.exports = sequelize;