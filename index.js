function check (date) {
    const day = date.getDay(date);
    if (day == 3) return true;
    else return false;
}

module.exports = function (data) {
    if (data instanceof Date) {
    //raw date object
        return check(data);
    } else if (!isNaN(data)) {
    //treat as milliseconds
        return check(new Date(data));
    } else if (typeof data == "string") {
        const trydate = new Date(data);
        if (trydate == "Invalid Date") {
            throw new TypeError('That is not a valid String.');
        }
        else {
            return check(trydate);
        }
    } else if (data == null) {
        return check(new Date());
    } else {
        throw new TypeError('That is not a Date, Number, or String object.');
    }
};
