const sequelize = require('../dbConect');
const { DataTypes } = require('sequelize');

const { USER_MODELS } = require('../../const/db.const');

const User = sequelize.define(USER_MODELS, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        require: true
    },
    last_name: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        require: true,
    },
    password: {
        type: DataTypes.STRING,
        require: true,
    },
    phone: {
        type: DataTypes.STRING
    },
});




module.exports = User;
