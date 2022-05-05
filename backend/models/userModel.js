const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Users = sequelize.define('userModel', {
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    token: { type: Sequelize.STRING },
});

module.exports = Users;