const check = require('./checkdate.js');

module.exports = function (data) {
    //console.log(typeof data);
    if (data instanceof Date) {
    //raw date object
        return check(data);
    } else if (typeof data == Number) {
    //treat as milliseconds
        return check(new Date(data));
    } else {
        throw new TypeError('That is not a Date or Number object.');
    }
};
