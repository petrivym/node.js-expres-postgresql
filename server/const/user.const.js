module.exports = {
   BODY:'body',
   ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'secretToken',
   REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refreshSecretToken',
   LIFE_CYCLE_ACCESS_TOKEN: '80m',  //For test normal = 10m
   LIFE_CYCLE_REFRESH_TOKEN: '31d',
   ACCESS: 'accessToken',
   REFRESH: 'refreshToken',
   AUTHORIZATION: 'AUTHORIZATION',
};
