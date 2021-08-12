const { WRONG_PASSWORD } = require('../error/error.message')
const { User } = require('../db/models');
const { ErrorHandler } = require('../error');
const {passwordHasher: { compare } } = require('../helpers')

module.exports = {
    checkPasswordAndEmail: async (req, res, next) => {
        try {
            const { password, email } = req.body;

            const validUser = await User.findOne({where: { email } });
            const {password: hashPassword} = validUser;

            if (!validUser) {
                throw new ErrorHandler(WRONG_PASSWORD.statusCode, WRONG_PASSWORD.message, WRONG_PASSWORD.code);
            }

             await compare(hashPassword, password);

            req.user = validUser;
            next();
        } catch (e) {
            next(e)
        }

    }
}
