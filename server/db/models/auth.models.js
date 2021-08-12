const sequelize = require('../dbConect');
const { DataTypes } = require('sequelize');

const { AUTH_MODELS } = require('../../const/db.const');

const AuthModels = sequelize.define(AUTH_MODELS, {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    accessToken: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    refreshToken: {
        type: DataTypes.STRING,
        defaultValue: ''
    }
});


module.exports = AuthModels;
