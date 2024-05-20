const CLientError = require("./ClientError");

class ImagesError extends CLientError{
    constructor(message){
        super(message,413);
        this.name = 'ImagesError';
    }
}

module.exports = ImagesError;