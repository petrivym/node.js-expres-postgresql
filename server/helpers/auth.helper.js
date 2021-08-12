const jwt = require('jsonwebtoken');

const {
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    LIFE_CYCLE_ACCESS_TOKEN,
    LIFE_CYCLE_REFRESH_TOKEN,
    ACCESS
} = require('../const/user.const');
const { promisify } = require('util');

const verifyPromise = promisify(jwt.verify);

module.exports = {
    generateTokenPair: (id, email) => {
        const accessToken = jwt.sign({ id: id, email: email }, ACCESS_TOKEN_SECRET, { expiresIn: LIFE_CYCLE_ACCESS_TOKEN });

        const refreshToken = jwt.sign({
            id: id,
            email: email
        }, REFRESH_TOKEN_SECRET, {expiresIn: LIFE_CYCLE_REFRESH_TOKEN});

        return {
            accessToken,
            refreshToken
        };
    },

    verifyToken: async (token, tokenType = ACCESS) => {
        const secretWorld = tokenType === ACCESS ? ACCESS_TOKEN_SECRET : REFRESH_TOKEN_SECRET;

        await verifyPromise(token, secretWorld, tokenType);
    }
};
