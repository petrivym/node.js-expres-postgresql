class ErrorHandlers extends Error {
    constructor(code, message, customCode) {
        super(message);
        this.code = code;
        this.message = message;
        this.customCode = customCode;

        Error.captureStackTrace(this, this.constructor);
    }

}

module.exports = ErrorHandlers;
