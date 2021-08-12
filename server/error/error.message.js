module.exports = {
    RECORD_NOT_FOUND: {
        statusCode: 404,
        massage: 'Record not found',
        customCode: 4040
    },

    UNKNOWN_ERROR: {
        massage: 'Unknown error',
        customCode: 0
    },

    ERROR_EMAIL_CONFLICT: {
        statusCode: 409,
        massage: 'this email is already exist!!!!!!!!!!!!!!',
        customCode: 4090
    },

    FIELDS_ARE_EMPTY_ERR: {
        statusCode: 401,
        massage: 'same fields are empty',
        customCode: 4010
    },

    WRONG_PASSWORD: {
        statusCode: 404,
        message: 'wrong email or password',
        customCode: 4041
    },

    NO_TOKEN: {
        statusCode:401,
        massage: 'No token',
        customCode: 4010
    },

    WRONG_TOKEN: {
        statusCode:401,
        message: 'Wrong token',
        customCode: 4011
    },

};
