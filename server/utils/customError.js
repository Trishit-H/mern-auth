function customErrorHandler(statusCode, message) {
    // create a new error object using the error constructor
    const error = new Error();

    // add the statusCode and message fields to the error object
    error.statusCode = statusCode;
    error.message = message

    return error
};

module.exports = customErrorHandler;