const { SUCCESS, CREATED_OR_UPDATE } = require('../const/responseCode.const');
const { User } = require('../db/models');
const { passwordHasher: { hash } } = require('../helpers');


module.exports = {
    crateUser: async (req, res, next) => {
        try {
            const { body } = req;

            const hashPassword = await hash(body.password);

            const user = await User.create({ ...body, password: hashPassword });

            res.status(SUCCESS).json(user);
        } catch (e) {
            next(e);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const { user } = req;

            res.status(SUCCESS).json(user);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const {body, user:{id,dataValues}} = req;

            await User.update({...dataValues,...body},{where:{id: id}});

            res.status(CREATED_OR_UPDATE).json('ok');
        } catch (e) {
            next(e);
        }
    }
};
