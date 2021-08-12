const bcrypt = require('bcrypt');

const { WRONG_PASSWORD } = require('../error/error.message');
const { WRONG_PASSWORD_EMAIL } = require('../const/regexpConst');
const { ErrorHandler } = require('../error')

module.exports = {
    compare: async (hashedPassword, password) => {
        const isPasswordMatched = await bcrypt.compare(password, hashedPassword);

        if (!isPasswordMatched) {
            throw new ErrorHandler(WRONG_PASSWORD_EMAIL, WRONG_PASSWORD.massage, WRONG_PASSWORD.code);
        }
    },
    hash: (password) => bcrypt.hash(password, 10)
};
