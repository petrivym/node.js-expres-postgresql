const {ErrorHandler} = require('../error/');
const {
    FIELDS_ARE_EMPTY_ERR,
    ERROR_EMAIL_CONFLICT,
    NO_TOKEN,
    WRONG_TOKEN,
    RECORD_NOT_FOUND
} = require('../error/error.message');
const { UserConst: { BODY, AUTHORIZATION, ACCESS }, responseCode } = require('../const');
const { User, Auth } = require('../db/models');
const { generateToken: { verifyToken } } = require('../helpers');
const { validator } = require('../validators');

module.exports = {
    checkIsPresent: async (req, res, next) => {
        try {

            const { id } = req.params;

            const user = await User.findOne({where: { id: id } });

            if (!user) {
                throw new ErrorHandler(RECORD_NOT_FOUND.statusCode, RECORD_NOT_FOUND.massage, RECORD_NOT_FOUND.customCode);
            }

            req.user = user;
            next();
        } catch (e) {

            next(e);
        }
    },

    checkValidUpdateUser: async (req, res, next) => {
        try {
            const { first_name, email, password,last_name,phone } = req.body;

            const emailDb = await User.findOne({where: { email } });
            const { error } = validator.updateUser.validate(req.body);
            if (emailDb) {

                throw new ErrorHandler(ERROR_EMAIL_CONFLICT.statusCode, ERROR_EMAIL_CONFLICT.massage, ERROR_EMAIL_CONFLICT.customCode);
            }

            next();
        } catch (e) {

            next(e);
        }
    },

    checkValidUserCreat: async (req, res, next) => {
        try {
            const { first_name, email, password } = req.body;
            const { error } = validator.createUser.validate(req.body);
            if (!(first_name && email && password)) {
                throw new ErrorHandler(FIELDS_ARE_EMPTY_ERR.statusCode, FIELDS_ARE_EMPTY_ERR.massage, FIELDS_ARE_EMPTY_ERR.customCode);
            }
            if (error) {
                throw new ErrorHandler(responseCode.BAD_REQUEST, error.details[0].message, responseCode.ERROR_VALID);
            }

            const emailDb = await User.findOne({where: { email } });

            if (emailDb) {
                throw new ErrorHandler(ERROR_EMAIL_CONFLICT.statusCode, ERROR_EMAIL_CONFLICT.massage, ERROR_EMAIL_CONFLICT.customCode);
            }

            next();
        } catch (e) {

            next(e);
        }
    },

    checkToken: (tokenType = ACCESS) => async (req, res, next) => {
        try {
            const { user } = req;
            const token = req.get(AUTHORIZATION);
            if (!token) {
                throw new ErrorHandler(NO_TOKEN.statusCode, NO_TOKEN.massage, NO_TOKEN.customCode);
            }

            await verifyToken(token, tokenType);

            const id  = await Auth.findOne({where: {[tokenType]: token, id: user.id}});

            if (!id) {
                throw new ErrorHandler(WRONG_TOKEN.statusCode, WRONG_TOKEN.message, WRONG_TOKEN.customCode);
            }

            next();
        } catch (e) {

            next(e);
        }
    }
}
