const express = require('express');
require('dotenv').config();

const { RECORD_NOT_FOUND, UNKNOWN_ERROR } = require('./error/error.message');
const {dbConst: { PORT } } = require('./const');
const sequelize = require('./db/dbConect');

const { authRouter, userRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/login', authRouter);
app.use('*', _notFoundHandler);
app.use(_handleErrors);

function _handleErrors(err, req, res, next) {
    res
        .status(err.code)
        .json({
            message: err.message || UNKNOWN_ERROR.massage,
            customCode: err.customCode || UNKNOWN_ERROR.customCode
        });
}

function _notFoundHandler(req, res, next) {
    next({
        code: RECORD_NOT_FOUND.statusCode,
        message: RECORD_NOT_FOUND.massage,
        customCode: RECORD_NOT_FOUND.customCode
    });
}

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`app work on a port ${ PORT }`));
    } catch (e) {
        console.log(e);
    }
}

start();
