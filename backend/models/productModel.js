const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Products = sequelize.define('productModel', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
    },
    releaseDate:{
        type: Sequelize.DATE,
        allowNull: false
    },
    imgUrl:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    
});

module.exports = Products;