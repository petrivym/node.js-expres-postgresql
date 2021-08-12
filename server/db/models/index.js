const User = require('./user.models');
const Auth = require('./auth.models');

User.hasOne(Auth);
Auth.belongsTo(User);

module.exports.User = require('./user.models');
module.exports.Auth = require('./auth.models');
