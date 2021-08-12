const { SUCCESS } = require('../const/responseCode.const');
const { Auth } = require('../db/models');
const { generateTokenPair } = require('../helpers/auth.helper');

module.exports = {
    loginUser: async ( req, res, next) => {
        try {
            const { id, email } = req.user;

            const tokens = await generateTokenPair(id,email);

            const auth = await Auth.create({
                id: id,
                ...tokens
            });

            res.status(SUCCESS).json(auth);
        } catch (e) {
            next(e);
        }
    },
}
