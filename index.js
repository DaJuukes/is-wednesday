const check = require('./checkdate.js');

module.exports = function (data) {
    if (data instanceof Date) {
    //raw date object
        return check(data);
    } else if (!isNaN(data)) {
    //treat as milliseconds
        return check(new Date(data));
    } else {
        throw new TypeError('That is not a Date or Number object.');
    }
};
