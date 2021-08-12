const Joi = require('joi');

const {
    LATER_REGEXP,
    EMAIL_REGEXP,
    PHONE,
    PASSWORD_REGEXP
} = require('../const/regexpConst');

module.exports = {
    createUser: Joi.object().keys({
        first_name: Joi.string().regex(LATER_REGEXP).required().min(3).max(20),
        last_name: Joi.string().regex(LATER_REGEXP).min(3).max(20),
        email: Joi.string().required().regex(EMAIL_REGEXP),
        phone: Joi.string().regex(PHONE),
        password: Joi.string().required().regex(PASSWORD_REGEXP),
    }),

    updateUser: Joi.object().keys({
        first_name: Joi.string().regex(LATER_REGEXP).required().min(3).max(20),
        last_name: Joi.string().regex(LATER_REGEXP).min(3).max(20),
        email: Joi.string().regex(EMAIL_REGEXP),
        phone: Joi.string().regex(PHONE),
        password: Joi.string().regex(PASSWORD_REGEXP),
    }),
};
