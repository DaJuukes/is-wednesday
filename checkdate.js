module.exports = function (date) {
    const day = date.getDay(date);
    if (day == 3) return true;
    else return false; 
};
